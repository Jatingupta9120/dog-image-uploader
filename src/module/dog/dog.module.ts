import { Module } from '@nestjs/common';
import { DogPicController } from './controller/dog.controller';
import { DogRepository } from './repository/dog.repository';
import { DogService } from './service/dog.service';
import { FileUploadModule } from 'src/utils/file-upload/file_upload.module';

@Module({
    imports: [FileUploadModule],
    controllers: [DogPicController],
    providers: [DogRepository, DogService],
    exports: [DogRepository, DogService],
})
export class DogModule {}
