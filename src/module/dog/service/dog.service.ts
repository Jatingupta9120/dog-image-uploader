import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { errorName } from 'src/constants/error';
import { HttpExceptionWrapper } from 'src/utils/error/error.http.wrapper';
import { DogEntity } from '../entity/dog.entity';
import { DogRepository } from '../repository/dog.repository';

@Injectable()
export class DogService {
    constructor(private dogRepository: DogRepository) {}

    // Get all dog images
    async getAllDogImages() {
        return await this.dogRepository.getAllDogImages();
    }

    // Get dog images by Id
    async getDogPicDetailsById(id: string) {
        const dog = await this.dogRepository.getDogPicDetailsById(id);
        if (!dog) {
            throw new HttpExceptionWrapper(errorName.DOG_IMAGE_NOT_FOUND_ERROR);
        }
        return dog;
    }

    // Delete dog images by Id
    async deleteDogPic(id: string): Promise<boolean> {
        const dog = await this.getDogPicDetailsById(id);

        const originalImagePath = path.join(
            process.cwd(),
            'public',
            'uploads',
            dog.file_name,
        );
        const compressedImagePath = path.join(
            process.cwd(),
            'public',
            'compress',
            dog.compress_file_path,
        );

        try {
            if (fs.existsSync(originalImagePath)) {
                fs.unlinkSync(originalImagePath); // Remove original image
            }

            if (fs.existsSync(compressedImagePath)) {
                fs.unlinkSync(compressedImagePath); // Remove compressed image
            }
        } catch (error) {
            throw new Error('Error deleting image files: ' + error.message);
        }

        await this.dogRepository.deleteDogImage(id);

        return true;
    }

    // Update dog images by Id
    async updateDogPic(
        id: string,
        updateData: Partial<DogEntity>,
    ): Promise<DogEntity> {
        const existingDog = await this.getDogPicDetailsById(id);

        const originalImagePath = path.join(
            process.cwd(),
            'public',
            'uploads',
            existingDog.file_name,
        );
        const compressedImagePath = path.join(
            process.cwd(),
            'public',
            'compress',
            existingDog.compress_file_path,
        );

        // Delete old images if they exist
        if (fs.existsSync(originalImagePath)) {
            fs.unlinkSync(originalImagePath);
        }
        if (fs.existsSync(compressedImagePath)) {
            fs.unlinkSync(compressedImagePath);
        }

        return await this.dogRepository.updateDogPic(id, updateData);
    }
}
