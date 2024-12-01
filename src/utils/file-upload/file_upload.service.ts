import { Injectable } from '@nestjs/common';
import * as sharp from 'sharp'; // Sharp for image processing
import * as fs from 'fs'; // File system handling
import * as path from 'path'; // Path handling
import { v4 as uuidv4 } from 'uuid';
import { errorName } from 'src/constants/error';
import { HttpExceptionWrapper } from '../error/error.http.wrapper';
// Optional for unique filenames

@Injectable()
export class FileUploadService {
    async compressImage(
        file: Express.Multer.File,
    ): Promise<{ originalFileName: string; compressFileName: string }> {
        try {
            // Generate unique filenames based on a UUID to prevent overwrite issues
            // const epochTimestamp = Date.now();
            const originalFileName = `${uuidv4()}_${file.originalname}`;
            const compressFileName = `${uuidv4()}_compressed_${
                file.originalname
            }`;

            const originalFilePath = path.join(
                process.cwd(),
                'public',
                'uploads',
                originalFileName,
            );
            const compressedFilePath = path.join(
                process.cwd(),
                'public',
                'compress',
                compressFileName,
            );

            // Ensure the directories for uploads and compress folders exist
            this.ensureDirectoryExistence(
                path.join(process.cwd(), 'public', 'uploads'),
            );
            this.ensureDirectoryExistence(
                path.join(process.cwd(), 'public', 'compress'),
            );

            // Validate the uploaded file
            if (!file.buffer) {
                throw new HttpExceptionWrapper(errorName.FILE_BUFFER_ERROR);
            }
            if (!this.isImageFile(file.mimetype)) {
                throw new HttpExceptionWrapper(
                    errorName.NOT_VALID_IMAGE_FILE_ERROR,
                );
            }

            // Save the original image to the 'uploads' directory
            await fs.promises.writeFile(originalFilePath, file.buffer);

            // Compress the image (resize to 800px width while maintaining aspect ratio)
            await sharp(file.buffer)
                .resize(800)
                .jpeg({ quality: 80 }) // Optional for smaller file sizes
                .toFile(compressedFilePath);

            return { originalFileName, compressFileName };
        } catch (error) {
            console.error('Error compressing image:', error.message);
            throw new HttpExceptionWrapper(errorName.COMPRESSION_FAILED_ERROR);
        }
    }

    private ensureDirectoryExistence(dirPath: string): void {
        if (!fs.existsSync(dirPath)) {
            try {
                fs.mkdirSync(dirPath, { recursive: true });
                console.log(`Created directory: ${dirPath}`);
            } catch (err) {
                console.error(`Failed to create directory: ${dirPath}`, err);
                throw new Error('Directory creation failed');
            }
        }
    }

    private isImageFile(mimeType: string): boolean {
        const validImageTypes = [
            'image/jpeg',
            'image/png',
            'image/gif',
            'image/webp',
        ];
        return validImageTypes.includes(mimeType);
    }

    async deleteFile(filePath: string): Promise<void> {
        try {
            const fullFilePath = path.resolve(
                process.cwd(),
                'public',
                filePath,
            );

            if (fs.existsSync(fullFilePath)) {
                await fs.promises.unlink(fullFilePath);
                console.log(`Deleted file: ${fullFilePath}`);
            } else {
                console.log(`File not found: ${fullFilePath}`);
            }
        } catch (error) {
            console.error(`Error deleting file at ${filePath}`, error);
            throw new HttpExceptionWrapper(errorName.FILE_DELETION_ERROR);
        }
    }
}
