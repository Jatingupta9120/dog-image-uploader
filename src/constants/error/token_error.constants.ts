import { HttpStatus } from '@nestjs/common';
import { errorCode } from './errorCode';

export const errorName = {
    RESET_TOKEN_EXPIRED: 'RESET_TOKEN_EXPIRED',
    RESET_TOKEN_INVALID: 'RESET_TOKEN_INVALID',
    OTP_TOKEN_INVALID: 'OTP_TOKEN_INVALID',
    TOKEN_NOT_AVAILABLE: 'TOKEN_NOT_AVAILABLE',
};

export const errorType = {
    RESET_TOKEN_EXPIRED: {
        message: 'Reset token has expired. Please request a new reset token.',
        statusCode: HttpStatus.UNAUTHORIZED,
        errorCode: errorCode.RESET_TOKEN_EXPIRED,
    },
    RESET_TOKEN_INVALID: {
        message: 'Invalid reset token',
        statusCode: HttpStatus.UNAUTHORIZED,
        errorCode: errorCode.RESET_TOKEN_INVALID,
    },
    OTP_TOKEN_INVALID: {
        message: 'Invalid otp token',
        statusCode: HttpStatus.UNAUTHORIZED,
        errorCode: errorCode.OTP_TOKEN_INVALID,
    },
    TOKEN_NOT_AVAILABLE: {
        message: 'JWT token is required for Authentication',
        statusCode: HttpStatus.UNAUTHORIZED,
        errorCode: errorCode.TOKEN_NOT_AVAILABLE,
    },
};
