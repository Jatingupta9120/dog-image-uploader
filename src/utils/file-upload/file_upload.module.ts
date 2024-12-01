import { Module } from '@nestjs/common';
import { FileUploadService } from './file_upload.service';

@Module({
    providers: [FileUploadService],
    exports: [FileUploadService],
})
export class FileUploadModule {}
