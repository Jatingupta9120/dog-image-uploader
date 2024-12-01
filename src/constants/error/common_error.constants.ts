import { HttpStatus } from '@nestjs/common';
import { errorCode } from './errorCode';

export const errorName = {
    CUSTOM_COMMON_ERROR: 'CUSTOM_COMMON_ERROR',
    DATA_VALIDATION_ERROR: 'DATA_VALIDATION_ERROR',
    BAD_REQUEST_PARAMS: 'BAD_REQUEST_PARAMS',
    ITEM_NOT_FOUND: 'ITEM_NOT_FOUND',
    INVALID_CONFIG_ID: 'INVALID_CONFIG_ID',
    NOT_ALLOWED_TO_VIEW_THIS_INFO: 'NOT_ALLOWED_TO_VIEW_THIS_INFO',
    CONFLICT_ERROR: 'CONFLICT_ERROR',
};

export const errorType = {
    CONFLICT_ERROR: {
        message: 'Conflict error',
        statusCode: HttpStatus.CONFLICT,
        errorCode: errorCode.CONFLICT,
    },
    CUSTOM_COMMON_ERROR: {
        message: 'Custom common error',
        statusCode: HttpStatus.BAD_REQUEST,
        errorCode: errorCode.CUSTOM_COMMON_ERROR,
    },
    DATA_VALIDATION_ERROR: {
        message: 'Data validation error',
        statusCode: HttpStatus.BAD_REQUEST,
        errorCode: errorCode.DATA_VALIDATION_ERROR,
    },

    BAD_REQUEST_PARAMS: {
        message: 'Details enter either exist in system or are invalid',
        statusCode: HttpStatus.BAD_REQUEST,
        errorCode: errorCode.BAD_REQUEST,
    },
    ITEM_NOT_FOUND: {
        message: 'Not found',
        statusCode: HttpStatus.NOT_FOUND,
        errorCode: errorCode.BAD_REQUEST,
    },
    INVALID_CONFIG_ID: {
        message: 'Invalid Configuration Id',
        statusCode: HttpStatus.BAD_REQUEST,
        errorCode: errorCode.DATA_VALIDATION_ERROR,
    },
    NOT_ALLOWED_TO_VIEW_THIS_INFO: {
        message: 'You are not allowed to view this info',
        statusCode: HttpStatus.FORBIDDEN,
        errorCode: errorCode.NOT_ALLOWED_TO_VIEW_THIS_INFO_ERROR,
    },
};
