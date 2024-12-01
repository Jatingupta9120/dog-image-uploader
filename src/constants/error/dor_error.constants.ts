import { HttpStatus } from '@nestjs/common';
import { errorCode } from './errorCode';

export const errorName = {
    FILE_NOT_FOUND_ERROR: 'FILE_NOT_FOUND_ERROR',
    FILE_BUFFER_ERROR: 'FILE_BUFFER_ERROR',
    IMAGE_NOT_FOUND_ERROR: 'IMAGE_NOT_FOUND_ERROR',
    DOG_IMAGE_NOT_FOUND_ERROR: 'DOG_IMAGE_NOT_FOUND_ERROR',
    NOT_VALID_IMAGE_FILE_ERROR: 'NOT_VALID_IMAGE_FILE_ERROR',
    COMPRESSION_FAILED_ERROR: 'COMPRESSION_FAILED_ERROR',
    FILE_DELETION_ERROR: 'FILE_DELETION_ERROR',
};
export const errorType = {
    FILE_NOT_FOUND_ERROR: {
        message: ' File is required',
        statusCode: HttpStatus.BAD_REQUEST,
        errorCode: errorCode.FILE_NOT_FOUND_ERROR,
    },
    FILE_BUFFER_ERROR: {
        message: ' File buffer is undefined',
        statusCode: HttpStatus.BAD_REQUEST,
        errorCode: errorCode.FILE_BUFFER_ERROR,
    },
    IMAGE_NOT_FOUND_ERROR: {
        message: ' Dog image not found',
        statusCode: HttpStatus.NOT_FOUND,
        errorCode: errorCode.IMAGE_NOT_FOUND_ERROR,
    },
    DOG_IMAGE_NOT_FOUND_ERROR: {
        message: 'Dog image not found for update',
        statusCode: HttpStatus.NOT_FOUND,
        errorCode: errorCode.DOG_IMAGE_NOT_FOUND_ERROR,
    },
    NOT_VALID_IMAGE_FILE_ERROR: {
        message: 'The uploaded file is not a valid image',
        statusCode: HttpStatus.NOT_FOUND,
        errorCode: errorCode.NOT_VALID_IMAGE_FILE_ERROR,
    },
    COMPRESSION_FAILED_ERROR: {
        message: 'Image compression failed',
        statusCode: HttpStatus.NOT_FOUND,
        errorCode: errorCode.COMPRESSION_FAILED_ERROR,
    },
    FILE_DELETION_ERROR: {
        message: 'File deletion failed',
        statusCode: HttpStatus.NOT_FOUND,
        errorCode: errorCode.FILE_DELETION_ERROR,
    },
};
