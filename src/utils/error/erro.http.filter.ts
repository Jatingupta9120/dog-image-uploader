import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpException,
    Inject,
} from '@nestjs/common';
import { HttpArgumentsHost } from '@nestjs/common/interfaces';
import { Response } from 'express';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { HttpResponse } from 'src/constants/response/responseCode';
import { Logger } from 'winston';
import { v4 as uuidv4 } from 'uuid';

@Catch(HttpException)
export class ErrorHttpFilter implements ExceptionFilter {
    constructor(
        @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
    ) {}

    async catch(exception: HttpException, host: ArgumentsHost): Promise<void> {
        const ctx: HttpArgumentsHost = host.switchToHttp();
        const statusHttp: number = exception.getStatus();
        const response = ctx.getResponse<Response>();
        const exceptionResponse: any = exception.getResponse();
        const debugId = uuidv4();
        const timeStamp = new Date().toISOString();

        this.logger.error('Response error:', {
            statusCode: statusHttp,
            errorMessage: exceptionResponse.message,
            errorCode: exceptionResponse.errorCode,
            debugId: debugId,
        });

        if (
            typeof exceptionResponse === 'object' &&
            'statusCode' in exceptionResponse &&
            'message' in exceptionResponse
        ) {
            response.status(statusHttp).json({
                statusCode: statusHttp,
                message: exceptionResponse.message,
                errors: exceptionResponse.errors,
                errorCode: exceptionResponse.errorCode,
                debugId,
                timeStamp,
            });
        } else if (typeof exceptionResponse === 'string') {
            response.status(statusHttp).json({
                statusCode: statusHttp,
                message: exceptionResponse,
                debugId,
                timeStamp,
            });
        } else {
            response.status(statusHttp).json({
                statusCode: statusHttp,
                message: HttpResponse?.[statusHttp] ?? 'Error message',
                errors: exceptionResponse,
                debugId,
                timeStamp,
            });
        }
    }
}
