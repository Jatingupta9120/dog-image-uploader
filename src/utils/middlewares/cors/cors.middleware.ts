import { HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as cors from 'cors';
import { CorsOptions } from 'cors';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class CorsMiddleware implements NestMiddleware {
    constructor(private readonly configService: ConfigService) {}

    use(req: Request, res: Response, next: NextFunction): void {
        const mode: string = this.configService.get('app.mode')!;

        const allowOrigin =
            mode === 'secure'
                ? this.configService.get('middleware.cors.allowOrigin')
                : '*';

        const allowMethod = this.configService.get<string[]>(
            'middleware.cors.allowMethod',
        );
        const allowHeader = this.configService.get<string[]>(
            'middleware.cors.allowHeader',
        );

        const corsOptions: CorsOptions = {
            origin: allowOrigin,
            methods: allowMethod,
            allowedHeaders: allowHeader,
            preflightContinue: false,
            credentials: true,
            optionsSuccessStatus: HttpStatus.NO_CONTENT,
            exposedHeaders: [
                'x-access-token',
                'x-refresh-token',
                'x-role-type',
                'x-user-location',
            ],
        };

        cors(corsOptions)(req, res, next);
    }
}
