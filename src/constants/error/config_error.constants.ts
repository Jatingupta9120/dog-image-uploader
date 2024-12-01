import { HttpStatus } from '@nestjs/common';
import { errorCode } from './errorCode';

export const errorName = {
    CONFIGURATION_ALREADY_EXIST: 'CONFIGURATION_ALREADY_EXIST',
    CONFIGURATION_DOES_NOT_EXIST: 'CONFIGURATION_DOES_NOT_EXIST',
    SYSTEM_CONFIG_CAN_NOT_BE_ADDED: 'SYSTEM_CONFIG_CAN_NOT_BE_ADDED',
    SYSTEM_CONFIG_CAN_NOT_BE_UPDATED: 'SYSTEM_CONFIG_CAN_NOT_BE_UPDATED',
};

export const errorType = {
    CONFIGURATION_ALREADY_EXIST: {
        message: 'A configuration with same name and type already exist',
        statusCode: HttpStatus.CONFLICT,
        errorCode: errorCode.CONFIGURATION_ALREADY_EXIST,
    },
    CONFIGURATION_DOES_NOT_EXIST: {
        message: 'A configuration with this id does not exist',
        statusCode: HttpStatus.BAD_REQUEST,
        errorCode: errorCode.CONFIGURATION_DOES_NOT_EXIST,
    },
    SYSTEM_CONFIG_CAN_NOT_BE_ADDED: {
        message: 'A system configuration can not be added',
        statusCode: HttpStatus.BAD_REQUEST,
        errorCode: errorCode.SYSTEM_CONFIG_CAN_NOT_BE_ADDED,
    },
    SYSTEM_CONFIG_CAN_NOT_BE_UPDATED: {
        message: 'A system configuration can not be updated',
        statusCode: HttpStatus.BAD_REQUEST,
        errorCode: errorCode.SYSTEM_CONFIG_CAN_NOT_BE_UPDATED,
    },
};
