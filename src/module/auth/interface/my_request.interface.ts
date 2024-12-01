import { Request } from 'express';
import { iAuthTokenInfo } from './token.interface';

export interface MyRequest extends Request {
    userInfo: iAuthTokenInfo;
}
