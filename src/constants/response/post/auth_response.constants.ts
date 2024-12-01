import { HttpStatus } from '@nestjs/common';
import { iResponseStatusMessage } from 'src/utils/response/response.interface';

export const responseName = {
    LOGIN: 'LOGIN',
    CHANGE_PASSWORD: 'CHANGE_PASSWORD',
    REFRESH_TOKEN: 'REFRESH_TOKEN',
    LOGOUT: 'LOGOUT',
};

export const responseInfo: Record<string, iResponseStatusMessage> = {
    LOGIN: {
        message: 'Login successful',
        statusCode: HttpStatus.OK,
    },
    LOGOUT: {
        message: 'Logout successful',
        statusCode: HttpStatus.OK,
    },
    CHANGE_PASSWORD: {
        message: 'Password changed successfully',
        statusCode: HttpStatus.OK,
    },
    REFRESH_TOKEN: {
        message: 'Tokens added to header successfully',
        statusCode: HttpStatus.OK,
    },
};
