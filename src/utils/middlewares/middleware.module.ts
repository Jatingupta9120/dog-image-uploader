import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DatabaseModule } from 'src/database/database.module';
import { AuthModule } from 'src/module/auth/auth.module';
import { RoleRepository } from 'src/module/auth/repository/role.repository';
import { UserModule } from 'src/module/user/user.module';
import { HashModule } from '../hashing/hash.module';
import { JWTModule } from '../jwtService/jwt.module';
import { CorsMiddleware } from './cors/cors.middleware';
import { AuthorizationMiddleware } from './authorization/authorization.middleware';
import { DogModule } from 'src/module/dog/dog.module';

// Proxy middlewares

@Module({
    imports: [
        HashModule,
        JWTModule,
        DatabaseModule,
        AuthModule,
        UserModule,
        DogModule,
    ],
    providers: [ConfigService, RoleRepository],
})
export class MiddlewareModule implements NestModule {
    configure(consumer: MiddlewareConsumer): void {
        consumer.apply(CorsMiddleware).forRoutes('*');
        consumer
            .apply(AuthorizationMiddleware)
            .exclude('v1/users/login', 'v1/users/signup')
            .forRoutes('*');
    }
}
