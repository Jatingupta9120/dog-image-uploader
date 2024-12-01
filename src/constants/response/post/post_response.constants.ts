import { HttpStatus } from '@nestjs/common';
import { iResponseStatusMessage } from 'src/utils/response/response.interface';

export const postresponseName = {
    PICS_UPLOADED: 'PICS_UPLOADED',
    GET_PICS_BY_ID: 'GET_PICS_BY_ID',
    GET_ALL_PICS: 'GET_ALL_PICS',
    DELETED_PIC: 'DELETED_PIC',
    UPDATED_PIC: 'UPDATED_PIC',
};

export const postresponseInfo: Record<string, iResponseStatusMessage> = {
    PICS_UPLOADED: {
        message: 'Pic uploaded successfully',
        statusCode: HttpStatus.CREATED,
    },

    GET_PICS_BY_ID: {
        message: 'fetch pic successfully',
        statusCode: HttpStatus.OK,
    },

    GET_ALL_PICS: {
        message: 'fetch all pics successfully',
        statusCode: HttpStatus.OK,
    },
    DELETED_PIC: {
        message: 'deleted pic successfully',
        statusCode: HttpStatus.OK,
    },
    UPDATED_PIC: {
        message: 'updated pic successfully',
        statusCode: HttpStatus.OK,
    },
};
