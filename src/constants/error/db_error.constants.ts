import { HttpStatus } from '@nestjs/common';
import { errorCode } from './errorCode';

export const errorName = {
    DB_INSERTION_FAILED: 'DB_INSERTION_FAILED',
    DB_UPDATE_FAILED: 'DB_UPDATE_FAILED',
    DATA_DELETE_FAILED: 'DATA_DELETE_FAILED',
};

export const errorType = {
    DB_INSERTION_FAILED: {
        message: 'Db insertion failed',
        statusCode: HttpStatus.BAD_REQUEST,
        errorCode: errorCode.BAD_REQUEST,
    },

    DB_UPDATE_FAILED: {
        message: 'Db update failed',
        statusCode: HttpStatus.BAD_REQUEST,
        errorCode: errorCode.BAD_REQUEST,
    },

    DATA_DELETE_FAILED: {
        message: 'Data delete failed',
        statusCode: HttpStatus.BAD_REQUEST,
        errorCode: errorCode.BAD_REQUEST,
    },
};
