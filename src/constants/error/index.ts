import { iErrorInfo } from 'src/utils/error/error.interface';
import * as AuthError from './auth_error.constants';
import * as CommonError from './common_error.constants';
import * as ConfigError from './config_error.constants';
import * as DbError from './db_error.constants';
import * as dogError from './dor_error.constants';
import * as TokenError from './token_error.constants';
import * as UserError from './user_error.constants';

// Define error name
export const errorName = {
    ...CommonError.errorName,
    ...DbError.errorName,
    ...UserError.errorName,
    ...AuthError.errorName,
    ...TokenError.errorName,
    ...ConfigError.errorName,
    ...dogError.errorName,
};

// Error information
export const errorType: Record<string, iErrorInfo> = {
    ...CommonError.errorType,
    ...DbError.errorType,
    ...UserError.errorType,
    ...AuthError.errorType,
    ...TokenError.errorType,
    ...ConfigError.errorType,
    ...dogError.errorType,
};
