import { HttpStatus } from '@nestjs/common';
import { errorCode } from './errorCode';

export const errorName = {
    AUCTION_ALREADY_EXIST: 'AUCTION_ALREADY_EXIST',
    NO_AUCTION_EXIST: 'NO_AUCTION_EXIST',
    AUCTION_ALREADY_PUBLISHED: 'AUCTION_ALREADY_PUBLISHED',
    INVALID_STATE_FOR_BIDDER_ALLOCATION: 'INVALID_STATE_FOR_BIDDER_ALLOCATION',
    INVALID_BIDDER_VOLUME: 'INVALID_BIDDER_VOLUME',
    AUCTION_CANCEL_ACCESS_DENIED: 'AUCTION_CANCEL_ACCESS_DENIED',
    UNABLE_TO_UPDATE_AUCTION_INTERVAL: 'UNABLE_TO_UPDATE_AUCTION_INTERVAL',
    UNABLE_TO_UPDATE_DUE_TO_START_TIME_BUFFER:
        'UNABLE_TO_UPDATE_DUE_TO_START_TIME_BUFFER',
    UNABLE_TO_UPDATE_DUE_TO_END_TIME_BUFFER:
        'UNABLE_TO_UPDATE_DUE_TO_END_TIME_BUFFER',
};

export const errorType = {
    UNABLE_TO_UPDATE_DUE_TO_START_TIME_BUFFER: {
        message: 'Auction time cannot be updated due to its start time buffer',
        statusCode: HttpStatus.BAD_REQUEST,
        errorCode: errorCode.UNABLE_TO_UPDATE_DUE_TO_START_TIME_BUFFER_ERROR,
    },
    UNABLE_TO_UPDATE_DUE_TO_END_TIME_BUFFER: {
        message: 'Auction time cannot be updated due to its end time buffer',
        statusCode: HttpStatus.BAD_REQUEST,
        errorCode: errorCode.UNABLE_TO_UPDATE_DUE_TO_END_TIME_BUFFER_ERROR,
    },
    UNABLE_TO_UPDATE_AUCTION_INTERVAL: {
        message: 'The provided start time is greater than the end time',
        statusCode: HttpStatus.BAD_REQUEST,
        errorCode: errorCode.UNABLE_TO_UPDATE_AUCTION_INTERVAL,
    },

    AUCTION_CANCEL_ACCESS_DENIED: {
        message: 'Unauthorized to cancel the auction.',
        statusCode: HttpStatus.UNAUTHORIZED,
        errorCode: errorCode.AUCTION_CANCEL_ACCESS_DENIED,
    },
    AUCTION_ALREADY_EXIST: {
        message: 'Auction with same auction ID exist',
        statusCode: HttpStatus.CONFLICT,
        errorCode: errorCode.AUCTION_ALREADY_EXIST,
    },

    NO_AUCTION_EXIST: {
        message: 'No Record found',
        statusCode: HttpStatus.NOT_FOUND,
        errorCode: errorCode.AUCTION_DOES_NOT_EXIST,
    },

    AUCTION_ALREADY_PUBLISHED: {
        message: 'Can not update. This auction is already published',
        statusCode: HttpStatus.BAD_REQUEST,
        errorCode: errorCode.AUCTION_ALREADY_PUBLISHED,
    },

    INVALID_STATE_FOR_BIDDER_ALLOCATION: {
        message: 'Invalid auction state for bidder allocation',
        statusCode: HttpStatus.BAD_REQUEST,
        errorCode: errorCode.INVALID_STATE_FOR_BIDDER_ALLOCATION,
    },

    INVALID_BIDDER_VOLUME: {
        message: 'Invalid bidder max volume',
        statusCode: HttpStatus.BAD_REQUEST,
        errorCode: errorCode.INVALID_BIDDER_VOLUME,
    },
};
