import {
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    UploadedFile,
    UseInterceptors,
    Body,
    Req,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileUploadService } from 'src/utils/file-upload/file_upload.service';
import { responseName } from '../../../constants/response';
import { Response as ResponseCustom } from '../../../utils/response/response.decorator';
import { DogService } from '../service/dog.service';
import { CreatePicDTO, GetDogPicParamDto, UpdatePicDTO } from '../dto/dog.dto';
import { DogEntity } from '../entity/dog.entity';
import { fileStorage } from 'src/utils/file-upload/file-storage.config';
import { HttpExceptionWrapper } from 'src/utils/error/error.http.wrapper';
import { errorName } from 'src/constants/error';
import { RoleType } from 'src/module/auth/constants/auth.constants';
import { MyRequest } from 'src/module/auth/interface/my_request.interface';
import { Roles as RoleGuard } from 'src/utils/guards/roleGuard.decorator';

@Controller()
export class DogPicController {
    constructor(
        private readonly dogService: DogService,
        private readonly fileUploadService: FileUploadService,
    ) {}

    @Post('upload')
    @ResponseCustom(responseName.PICS_UPLOADED)
    @UseInterceptors(FileInterceptor('file', { storage: fileStorage }))
    async uploadDogPic(
        @UploadedFile() file: Express.Multer.File,
        @Body() updatePic: CreatePicDTO,
    ) {
        if (!file) {
            throw new HttpExceptionWrapper(errorName.FILE_NOT_FOUND_ERROR);
        }

        if (!file.buffer) {
            throw new HttpExceptionWrapper(errorName.FILE_BUFFER_ERROR);
        }

        // Compress the image using the updated method
        const { originalFileName, compressFileName } =
            await this.fileUploadService.compressImage(file);

        // Save image info to the DogEntity table
        await DogEntity.create({
            ...updatePic,
            file_name: file.originalname,
            file_path: `uploads/${originalFileName}`,
            compress_file_path: `compress/${compressFileName}`,
            mime_type: file.mimetype,
        });

        const baseUrl = 'http://localhost:4020'; //I have hardcoded but in future i will use it from env

        // Return URLs for original and compressed images
        return {
            originImage: `${baseUrl}/uploads/${originalFileName}`,
            compressImage: `${baseUrl}/compress/${compressFileName}`,
        };
    }

    // Get all dog images
    @Get()
    @RoleGuard(RoleType.ADMIN)
    @ResponseCustom(responseName.GET_ALL_PICS)
    async getAllDogImages(@Req() req: MyRequest) {
        if (req.userInfo.role !== RoleType.ADMIN) {
            throw new HttpExceptionWrapper(
                errorName.NOT_ALLOWED_TO_VIEW_THIS_INFO,
            );
        }
        return this.dogService.getAllDogImages();
    }

    // Get dog images by Id
    @Get(':id')
    @ResponseCustom(responseName.GET_PICS_BY_ID)
    async getDogPicDetailsById(@Param() dogPic: GetDogPicParamDto) {
        const dogImage = await this.dogService.getDogPicDetailsById(dogPic.id);
        if (!dogImage) {
            throw new HttpExceptionWrapper(errorName.IMAGE_NOT_FOUND_ERROR);
        }

        const baseUrl = 'http://localhost:4020';
        const file_paths = dogImage.file_path;

        const imageUrl = `${baseUrl}/${file_paths}`;
        const compressedImageUrl = `${baseUrl}/${dogImage.compress_file_path}`;

        const obj = {
            id: dogImage.id,
            file_name: dogImage.file_name,
            mime_type: dogImage.mime_type,
            breed: dogImage.breed,
            age: dogImage.age,
            color: dogImage.color,
            file_path: imageUrl,
            compress_file_path: compressedImageUrl,
        };
        return obj;
    }

    // Delete dog images by Id
    @Delete(':id')
    @ResponseCustom(responseName.DELETED_PIC)
    async deleteDogPicById(@Param() dogPic: GetDogPicParamDto) {
        return await this.dogService.deleteDogPic(dogPic.id);
    }

    @Put(':id')
    @UseInterceptors(FileInterceptor('file', { storage: fileStorage })) // fileStorage should be your custom storage handler
    async updateDogPic(
        @Param() dogPic: GetDogPicParamDto,
        @UploadedFile() file: Express.Multer.File,
        @Body() updatePic: UpdatePicDTO,
    ) {
        if (!file) {
            throw new HttpExceptionWrapper(errorName.FILE_NOT_FOUND_ERROR);
        }

        // Fetch the existing dog image details from the database
        const existingImage = await this.dogService.getDogPicDetailsById(
            dogPic.id,
        );
        if (!existingImage) {
            throw new HttpExceptionWrapper(errorName.IMAGE_NOT_FOUND_ERROR);
        }

        try {
            await this.fileUploadService.deleteFile(existingImage.file_path);
            await this.fileUploadService.deleteFile(
                existingImage.compress_file_path,
            );
        } catch (error) {
            console.error('Error deleting old image files:', error);
        }

        // Compress the new image
        const { originalFileName, compressFileName } =
            await this.fileUploadService.compressImage(file);

        // Update the dog image metadata in the database
        await this.dogService.updateDogPic(dogPic.id, {
            ...updatePic,
            file_name: originalFileName,
            file_path: `uploads/${originalFileName}`,
            compress_file_path: `compress/${compressFileName}`,
            mime_type: file.mimetype,
        });

        const baseUrl = 'http://localhost:4020';
        // Return the URLs for the updated image
        return {
            originImage: `${baseUrl}/uploads/${originalFileName}`,
            compressImage: `${baseUrl}/compress/${compressFileName}`,
        };
    }
}
