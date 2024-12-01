import { HttpStatus } from '@nestjs/common';
import { errorCode } from './errorCode';

export const errorName = {
    COMPANY_ALREADY_EXIST: 'COMPANY_ALREADY_EXIST',
    NO_COMPANY_EXIST: 'NO_COMPANY_EXIST',
};

export const errorType = {
    COMPANY_ALREADY_EXIST: {
        message: 'A company with same company ID exist',
        statusCode: HttpStatus.CONFLICT,
        errorCode: errorCode.COMPANY_ALREADY_EXIST,
    },

    NO_COMPANY_EXIST: {
        message: 'Invalid company id',
        statusCode: HttpStatus.NOT_FOUND,
        errorCode: errorCode.NOT_FOUND,
    },
};
