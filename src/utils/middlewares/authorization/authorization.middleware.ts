import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable, NestMiddleware } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { Response, NextFunction } from 'express';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { errorName } from 'src/constants/error';
import { MyRequest } from 'src/module/auth/interface/my_request.interface';
import { AuthService } from 'src/module/auth/service/auth.service';
import { HttpExceptionWrapper } from 'src/utils/error/error.http.wrapper';
import { HashService } from 'src/utils/hashing/hash.service';
import { Logger } from 'winston';

@Injectable()
export class AuthorizationMiddleware implements NestMiddleware {
    constructor(
        private authService: AuthService,
        @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
        private hashService: HashService,
    ) {}

    async use(req: MyRequest, res: Response, next: NextFunction) {
        this.logger.info('Inside Authorization Middleware');
        const headers = req.headers;
        const bearerToken = headers?.authorization?.split(' ')?.[1];

        if (!bearerToken)
            throw new HttpExceptionWrapper(errorName.TOKEN_NOT_AVAILABLE);

        this.logger.info('Verifying token and getting user info');
        const userInfo = await this.authService.getUserInfoFromAccessToken(
            bearerToken,
        );

        if (!userInfo || userInfo.type != 'accessToken')
            throw new HttpExceptionWrapper(errorName.AUTH_INVALID_ACCESS_TOKEN);

        await this.authService.validateUserByToken(userInfo, req);

        this.logger.info('Attaching user info from token to request');
        req.userInfo = userInfo;

        next();
    }
}
