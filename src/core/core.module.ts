import { Module } from '@nestjs/common';
import { WinstonModule } from 'nest-winston';
import { DatabaseModule } from 'src/database/database.module';
import { ServiceGatewayModule } from 'src/service-gateway/service_gateway.module';
import { DebuggerModule } from 'src/utils/debugger/debugger.module';
import { ErrorModule } from 'src/utils/error/error.module';
import { PaginationModule } from 'src/utils/pagination/pagination.module';
import ConfigModule from './config.module';
// import { RedisModule } from 'src/utils/redis/redis.module';
import { DebuggerService } from 'src/utils/debugger/service/debugger.service';
import { FileUploadModule } from 'src/utils/file-upload/file_upload.module';
import { MiddlewareModule } from 'src/utils/middlewares/middleware.module';

@Module({
    imports: [
        // Config setup for environment file and values
        ConfigModule,

        MiddlewareModule,

        // Winston setup for logging
        WinstonModule.forRootAsync({
            inject: [DebuggerService],
            imports: [DebuggerModule],
            useFactory: (debuggerService: DebuggerService) =>
                debuggerService.createLogger(),
        }),

        // Error Module
        ErrorModule,

        // Database Modules
        DatabaseModule,

        // Pagination Modules
        PaginationModule,

        // ServiceGateway Module
        ServiceGatewayModule,

        //Redis MOdule
        FileUploadModule,
        // RedisModule,
    ],
})
export class CoreModule {}
