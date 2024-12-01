import { HttpStatus } from '@nestjs/common';
import { errorCode } from './errorCode';

export const errorName = {
    EXCEEDED_ALLOWED_DECIMAL_PLACES_FOR_PRICE:
        'EXCEEDED_ALLOWED_DECIMAL_PLACES_FOR_PRICE',
    EXCEEDED_ALLOWED_DECIMAL_PLACES_FOR_VOLUME:
        'EXCEEDED_ALLOWED_DECIMAL_PLACES_FOR_VOLUME',
    BID_ALREADY_EXIST: 'BID_ALREADY_EXIST',
    SAME_BID_ALREADY_EXIST: 'SAME_BID_ALREADY_EXIST',
    NOT_A_BETTER_BID: 'NOT_A_BETTER_BID',
    NO_BID_EXIST: 'NO_BID_EXIST',
    MAXIMUM_VOLUME_ALLOWED_LIMIT_EXCEEDS:
        'MAXIMUM_VOLUME_ALLOWED_LIMIT_EXCEEDS',
    MINIMUM_VOLUME_ALLOWED_LIMIT_EXCEEDS:
        'MINIMUM_VOLUME_ALLOWED_LIMIT_EXCEEDS',
    MAXIMUM_PRICE_ALLOWED_LIMIT_EXCEEDS: 'MAXIMUM_PRICE_ALLOWED_LIMIT_EXCEEDS',
    MINIMUM_PRICE_ALLOWED_LIMIT_EXCEEDS: 'MINIMUM_PRICE_ALLOWED_LIMIT_EXCEEDS',
    MAXIMUM_TENURE_ALLOWED_LIMIT_EXCEEDS:
        'MAXIMUM_TENURE_ALLOWED_LIMIT_EXCEEDS',
    MINIMUM_TENURE_ALLOWED_LIMIT_EXCEEDS:
        'MINIMUM_TENURE_ALLOWED_LIMIT_EXCEEDS',
    NOT_ALLOWED_TO_PLACE_BID: 'NOT_ALLOWED_TO_PLACE_BID',
    CAN_NOT_PLACE_BID: 'CAN_NOT_PLACE_BID',
    CAN_NOT_PLACE_BID_IN_BID_PHASE_WITHOUT_BID_IN_IPO:
        'CAN_NOT_PLACE_BID_IN_BID_PHASE_WITHOUT_BID_IN_IPO',
    CAN_NOT_PLACE_BID_IN_YOUR_OWN_AUCTION:
        'CAN_NOT_PLACE_BID_IN_YOUR_OWN_AUCTION',
    CAN_NOT_PLACE_MORE_THAN_ONE_BID_IN_IPO:
        'CAN_NOT_PLACE_MORE_THAN_ONE_BID_IN_IPO',

    MIN_PRICE_TICK_SIZE: 'MIN_PRICE_TICK_SIZE',
    MIN_VOLUME_TICK_SIZE: 'MIN_VOLUME_TICK_SIZE',
    MIN_TENURE_TICK_SIZE: 'MIN_TENURE_TICK_SIZE',

    // Price rejection
    INVALID_PRICE_LIMIT_RANGE: 'INVALID_PRICE_LIMIT_RANGE',
    PRICE_DECREASE_NOT_ALLOWED: 'PRICE_DECREASE_NOT_ALLOWED',
    PRICE_INCREASE_NOT_ALLOWED: 'PRICE_INCREASE_NOT_ALLOWED',
    PRICE_BELOW_MINIMUM_TICK_SIZE: 'PRICE_BELOW_MINIMUM_TICK_SIZE',

    // Volume rejection
    INVALID_VOLUME_LIMIT_RANGE: 'INVALID_VOLUME_LIMIT_RANGE',
    VOLUME_DECREASE_NOT_ALLOWED: 'VOLUME_DECREASE_NOT_ALLOWED',
    VOLUME_INCREASE_NOT_ALLOWED: 'VOLUME_INCREASE_NOT_ALLOWED',
    VOLUME_BELOW_MINIMUM_TICK_SIZE: 'VOLUME_BELOW_MINIMUM_TICK_SIZE',

    // Tenure rejection
    INVALID_TENURE_LIMIT_RANGE: 'INVALID_TENURE_LIMIT_RANGE',
    TENURE_DECREASE_NOT_ALLOWED: 'TENURE_DECREASE_NOT_ALLOWED',
    TENURE_INCREASE_NOT_ALLOWED: 'TENURE_INCREASE_NOT_ALLOWED',
    TENURE_BELOW_MINIMUM_TICK_SIZE: 'TENURE_BELOW_MINIMUM_TICK_SIZE',
};

export const errorType = {
    EXCEEDED_ALLOWED_DECIMAL_PLACES_FOR_PRICE: {
        message:
            'Invalid price format. Exceeded Allowed Decimal Places for Price.',
        statusCode: HttpStatus.BAD_REQUEST,
        errorCode: errorCode.EXCEEDED_ALLOWED_DECIMAL_PLACES_FOR_PRICE_ERROR,
    },
    EXCEEDED_ALLOWED_DECIMAL_PLACES_FOR_VOLUME: {
        message:
            'Invalid volume format. Exceeded Allowed Decimal Places for Volume.',
        statusCode: HttpStatus.BAD_REQUEST,
        errorCode: errorCode.EXCEEDED_ALLOWED_DECIMAL_PLACES_FOR_VOLUME_ERROR,
    },
    BID_ALREADY_EXIST: {
        message: 'A bid with same bid ID exist',
        statusCode: HttpStatus.CONFLICT,
        errorCode: errorCode.BID_ALREADY_EXIST,
    },

    SAME_BID_ALREADY_EXIST: {
        message: 'A bid with same details already exist',
        statusCode: HttpStatus.BAD_REQUEST,
        errorCode: errorCode.SAME_BID_ALREADY_EXIST,
    },
    NO_BID_EXIST: {
        message: 'No Record found',
        statusCode: HttpStatus.NOT_FOUND,
        errorCode: errorCode.NO_BID_EXIST,
    },
    NOT_A_BETTER_BID: {
        message: 'Bid needs to be better than previous',
        statusCode: HttpStatus.BAD_REQUEST,
        errorCode: errorCode.NOT_A_BETTER_BID,
    },
    NOT_ALLOWED_TO_PLACE_BID: {
        message: 'Not allowed to place bid in auction',
        statusCode: HttpStatus.FORBIDDEN,
        errorCode: errorCode.NOT_ALLOWED_TO_PLACE_BID,
    },
    CAN_NOT_PLACE_BID: {
        message: 'Can not place bid in current time period',
        statusCode: HttpStatus.BAD_REQUEST,
        errorCode: errorCode.CAN_NOT_PLACE_BID,
    },
    CAN_NOT_PLACE_BID_IN_BID_PHASE_WITHOUT_BID_IN_IPO: {
        message:
            'Can not place bid in bidding phase without placing bid in IPO phase.',
        statusCode: HttpStatus.BAD_REQUEST,
        errorCode: errorCode.CAN_NOT_PLACE_BID_IN_BID_PHASE_WITHOUT_BID_IN_IPO,
    },
    CAN_NOT_PLACE_BID_IN_YOUR_OWN_AUCTION: {
        message: 'Can not place bid in your own auction.',
        statusCode: HttpStatus.BAD_REQUEST,
        errorCode: errorCode.CAN_NOT_PLACE_BID_IN_YOUR_OWN_AUCTION,
    },
    CAN_NOT_PLACE_MORE_THAN_ONE_BID_IN_IPO: {
        message: 'Can not place more than one bid in current time period.',
        statusCode: HttpStatus.BAD_REQUEST,
        errorCode: errorCode.CAN_NOT_PLACE_MORE_THAN_ONE_BID_IN_IPO,
    },

    INVALID_PRICE_LIMIT_RANGE: {
        message: 'The specified price limit is out of the acceptable range.',
        statusCode: HttpStatus.BAD_REQUEST,
        errorCode: errorName.INVALID_PRICE_LIMIT_RANGE,
    },
    PRICE_DECREASE_NOT_ALLOWED: {
        message: 'The price cannot be decreased below the current level.',
        statusCode: HttpStatus.BAD_REQUEST,
        errorCode: errorName.PRICE_DECREASE_NOT_ALLOWED,
    },
    PRICE_INCREASE_NOT_ALLOWED: {
        message: 'The price cannot be increased beyond the current level.',
        statusCode: HttpStatus.BAD_REQUEST,
        errorCode: errorName.PRICE_INCREASE_NOT_ALLOWED,
    },
    PRICE_BELOW_MINIMUM_TICK_SIZE: {
        message: 'The specified price is below the minimum tick size allowed.',
        statusCode: HttpStatus.BAD_REQUEST,
        errorCode: errorName.PRICE_BELOW_MINIMUM_TICK_SIZE,
    },
    INVALID_VOLUME_LIMIT_RANGE: {
        message: 'The specified volume limit is out of the acceptable range.',
        statusCode: HttpStatus.BAD_REQUEST,
        errorCode: errorName.INVALID_VOLUME_LIMIT_RANGE,
    },
    VOLUME_DECREASE_NOT_ALLOWED: {
        message: 'The volume cannot be decreased below the current level.',
        statusCode: HttpStatus.BAD_REQUEST,
        errorCode: errorName.VOLUME_DECREASE_NOT_ALLOWED,
    },
    VOLUME_INCREASE_NOT_ALLOWED: {
        message: 'The volume cannot be increased beyond the current level.',
        statusCode: HttpStatus.BAD_REQUEST,
        errorCode: errorName.VOLUME_INCREASE_NOT_ALLOWED,
    },
    VOLUME_BELOW_MINIMUM_TICK_SIZE: {
        message: 'The specified volume is below the minimum tick size allowed.',
        statusCode: HttpStatus.BAD_REQUEST,
        errorCode: errorName.VOLUME_BELOW_MINIMUM_TICK_SIZE,
    },
    INVALID_TENURE_LIMIT_RANGE: {
        message: 'The specified tenure limit is out of the acceptable range.',
        statusCode: HttpStatus.BAD_REQUEST,
        errorCode: errorName.INVALID_TENURE_LIMIT_RANGE,
    },
    TENURE_DECREASE_NOT_ALLOWED: {
        message: 'The tenure cannot be decreased below the current level.',
        statusCode: HttpStatus.BAD_REQUEST,
        errorCode: errorName.TENURE_DECREASE_NOT_ALLOWED,
    },
    TENURE_INCREASE_NOT_ALLOWED: {
        message: 'The tenure cannot be increased beyond the current level.',
        statusCode: HttpStatus.BAD_REQUEST,
        errorCode: errorName.TENURE_INCREASE_NOT_ALLOWED,
    },
    TENURE_BELOW_MINIMUM_TICK_SIZE: {
        message: 'The specified tenure is below the minimum tick size allowed.',
        statusCode: HttpStatus.BAD_REQUEST,
        errorCode: errorName.TENURE_BELOW_MINIMUM_TICK_SIZE,
    },
};
