import { HttpStatus } from '@nestjs/common';
import { errorCode } from './errorCode';

export const errorName = {
    USER_ALREADY_EXIST: 'USER_ALREADY_EXIST',
    NO_USER_EXIST: 'NO_USER_EXIST',
    INACTIVE_SUSPENDED_USER: 'INACTIVE_SUSPENDED_USER',
    USER_EMAIL_EXIST: 'USER_EMAIL_EXIST',
};

export const errorType = {
    USER_ALREADY_EXIST: {
        message: 'A user with same user ID exist',
        statusCode: HttpStatus.BAD_REQUEST,
        errorCode: errorCode.BAD_REQUEST,
    },
    USER_EMAIL_EXIST: {
        message: 'A email with same email ID exist',
        statusCode: HttpStatus.BAD_REQUEST,
        errorCode: errorCode.BAD_REQUEST,
    },

    NO_USER_EXIST: {
        message: 'User not found with this id',
        statusCode: HttpStatus.NOT_FOUND,
        errorCode: errorCode.NOT_FOUND,
    },

    INACTIVE_SUSPENDED_USER: {
        message: 'User is either suspended or inactive',
        statusCode: HttpStatus.FORBIDDEN,
        errorCode: errorCode.INACTIVE_OR_SUSPENDED_USER,
    },
};
