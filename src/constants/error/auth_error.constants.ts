import { HttpStatus } from '@nestjs/common';
import { errorCode } from './errorCode';

export const errorName = {
    AUTH_INVALID_ACCESS_TOKEN: 'AUTH_INVALID_ACCESS_TOKEN',
    ADMIN_ONLY_ACCESS: 'ADMIN_ONLY_ACCESS',
    AUTH_ACCESS_TOKEN_EXPIRE: 'AUTH_ACCESS_TOKEN_EXPIRE',
    AUTH_INVALID_REFRESH_TOKEN: 'AUTH_INVALID_REFRESH_TOKEN',
    USER_ALREADY_EXIST: 'USER_ALREADY_EXIST',
    INCORRECT_PASSWORD: 'INCORRECT_PASSWORD',
    USER_DOES_NOT_EXIST: 'USER_DOES_NOT_EXIST',
    INCORRECT_OTP: 'INCORRECT_OTP',
    USER_ID_LOCKED: 'USER_ID_LOCKED',
    USER_SUSPENDED: 'USER_SUSPENDED',
    USER_INACTIVE: 'USER_INACTIVE',
    COMPANY_SUSPENDED: 'COMPANY_SUSPENDED',
    COMPANY_INACTIVE: 'COMPANY_INACTIVE',
    ACCOUNT_SUSPENDED: 'ACCOUNT_SUSPENDED',
    OLD_PASSWORD: 'OLD_PASSWORD',
    INVALID_USER: 'INVALID_USER',
    USER_ALREADY_LOGGED_IN: 'USER_ALREADY_LOGGED_IN',
    RESET_PASSWORD_REQUIRED: 'RESET_PASSWORD_REQUIRED',
};

export const errorType = {
    ADMIN_ONLY_ACCESS: {
        message: 'You must have admin privileges to access this resource',
        statusCode: HttpStatus.FORBIDDEN,
        errorCode: errorCode.ADMIN_ONLY_ACCESS,
    },
    AUTH_INVALID_ACCESS_TOKEN: {
        message: 'Invalid access token ',
        statusCode: HttpStatus.UNAUTHORIZED,
        errorCode: errorCode.AUTH_INVALID_ACCESS_TOKEN,
    },
    AUTH_ACCESS_TOKEN_EXPIRE: {
        message: 'Access token expired',
        statusCode: HttpStatus.UNAUTHORIZED,
        errorCode: errorCode.AUTH_ACCESS_TOKEN_EXPIRE,
    },
    AUTH_INVALID_REFRESH_TOKEN: {
        message: 'Invalid refresh token',
        statusCode: HttpStatus.UNAUTHORIZED,
        errorCode: errorCode.AUTH_INVALID_REFRESH_TOKEN,
    },
    USER_ALREADY_EXIST: {
        message: 'User already exist',
        statusCode: HttpStatus.CONFLICT,
        errorCode: errorCode.USER_ALREADY_EXIST,
    },
    USER_DOES_NOT_EXIST: {
        message: 'User does not exist',
        statusCode: HttpStatus.UNAUTHORIZED,
        errorCode: errorCode.USER_DOES_NOT_EXIST,
    },
    INCORRECT_PASSWORD: {
        message: 'Incorrect password',
        statusCode: HttpStatus.UNAUTHORIZED,
        errorCode: errorCode.INCORRECT_PASSWORD,
    },
    USER_ID_LOCKED: {
        message: 'UserId has been locked',
        statusCode: HttpStatus.FORBIDDEN,
        errorCode: errorCode.USER_ID_LOCKED,
    },
    INCORRECT_OTP: {
        message: 'Incorrect OTP',
        statusCode: HttpStatus.FORBIDDEN,
        errorCode: errorCode.INCORRECT_OTP,
    },
    ACCOUNT_SUSPENDED: {
        message: 'Account suspended',
        statusCode: HttpStatus.FORBIDDEN,
        errorCode: errorCode.ACCOUNT_SUSPENDED,
    },
    OLD_PASSWORD: {
        message: 'Password is similar to one of last three passwords',
        statusCode: HttpStatus.FORBIDDEN,
        errorCode: errorCode.OLD_PASSWORD,
    },
    INVALID_USER: {
        message: 'Invalid user',
        statusCode: HttpStatus.UNAUTHORIZED,
        errorCode: errorCode.INVALID_USER,
    },
    USER_ALREADY_LOGGED_IN: {
        message: 'User already logged in',
        statusCode: HttpStatus.CONFLICT,
        errorCode: errorCode.USER_ALREADY_LOGGED_IN,
    },
    RESET_PASSWORD_REQUIRED: {
        message: 'Please reset the password',
        statusCode: HttpStatus.FORBIDDEN,
        errorCode: errorCode.RESET_PASSWORD_REQUIRED,
    },
    COMPANY_SUSPENDED: {
        message: 'Your Company got suspended',
        statusCode: HttpStatus.UNAUTHORIZED,
        errorCode: errorCode.COMPANY_SUSPENDED,
    },
    COMPANY_INACTIVE: {
        message: 'Company Inactive',
        statusCode: HttpStatus.UNAUTHORIZED,
        errorCode: errorCode.COMPANY_INACTIVE,
    },
    USER_SUSPENDED: {
        message: 'User account suspended',
        statusCode: HttpStatus.UNAUTHORIZED,
        errorCode: errorCode.USER_SUSPENDED,
    },
    USER_INACTIVE: {
        message: 'User Inactive',
        statusCode: HttpStatus.UNAUTHORIZED,
        errorCode: errorCode.USER_INACTIVE,
    },
};
