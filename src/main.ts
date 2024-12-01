import { Logger, ValidationPipe, VersioningType } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationError } from 'class-validator';
// Import path for handling file paths
import { AppModule } from './app/app.module';
// import { DEFAULT_ERROR } from './constants/error/errors/default';
import { HttpExceptionWrapper } from './utils/error/error.http.wrapper';
import { iFieldError } from './utils/error/error.interface';
import { errorName } from './constants/error';
import * as path from 'path';
async function bootstrap() {
    const logger = new Logger('Bootstrap'); // Create a logger instance

    try {
        const app = await NestFactory.create<NestExpressApplication>(AppModule);

        // Serve static assets from the public directory
        app.useStaticAssets(path.join(process.cwd(), 'public', 'uploads'), {
            prefix: '/uploads', // Serve files from 'public/uploads' with '/uploads' URL prefix
        });

        // Serve the compressed files with nkvjkksdvnkvkvdk
        app.useStaticAssets(path.join(process.cwd(), 'public', 'compress'), {
            prefix: '/compress',
        });

        // Getting configuration for app server
        const configService = app.get(ConfigService);
        const env: string = configService.get('app.env')!;
        const host: string = configService.get('app.http.host')!;
        const port: number = configService.get('app.http.port')!;
        const versioning: boolean = configService.get('app.versioning.on')!;
        const globalPrefix: string = configService.get('app.globalPrefix')!;

        // Setting environment in NODE_ENV
        process.env.NODE_ENV = env;

        // Setting validation pipe for DTO
        app.useGlobalPipes(
            new ValidationPipe({
                whitelist: true,
                transform: true,
                exceptionFactory: (validationErrors: ValidationError[]) => {
                    const getError = (
                        error: ValidationError[],
                        appendFieldName = '',
                    ): iFieldError[] => {
                        return error.reduce((value, error) => {
                            if (error.children?.length) {
                                const newError = getError(
                                    error.children,
                                    `${appendFieldName}${error.property}.`,
                                );
                                value = [...value, ...newError];
                            } else {
                                value = [
                                    ...value,
                                    {
                                        field: appendFieldName + error.property,
                                        error: Object.values(
                                            error.constraints,
                                        ).join(', '),
                                    },
                                ];
                            }
                            return value;
                        }, [] as iFieldError[]);
                    };

                    return new HttpExceptionWrapper(
                        errorName.DATA_VALIDATION_ERROR,
                        getError(validationErrors),
                    );
                },
            }),
        );

        // Setting global prefix for API endpoint
        app.setGlobalPrefix(globalPrefix);

        // Setting versioning for API
        if (versioning) {
            app.enableVersioning({
                type: VersioningType.URI,
                defaultVersion: ['1'],
                prefix: configService.get('app.versioning.prefix'),
            });
        }

        // Starting server at given port and host
        await app.listen(port, host);

        logger.log(`App Environment is ${env}`, 'App');
        logger.log(`App Versioning is ${versioning}`, 'App');
        logger.log(`Server running on ${await app.getUrl()}`, 'App');
    } catch (error) {
        logger.error('Error during application bootstrap', error); // Improved error logging
    }
}

bootstrap();
