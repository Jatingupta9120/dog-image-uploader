import { forwardRef, Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { HashModule } from 'src/utils/hashing/hash.module';
import { PaginationModule } from 'src/utils/pagination/pagination.module';
import { UserModule } from '../user/user.module';
import { AuthController } from './controller/auth.controller';
import { RoleRepository } from './repository/role.repository';
import { AuthService } from './service/auth.service';
import { JWTModule } from 'src/utils/jwtService/jwt.module';

@Module({
    imports: [
        JWTModule,
        HashModule,
        forwardRef(() => UserModule),
        PaginationModule,
        DatabaseModule,
    ],
    controllers: [AuthController],
    providers: [AuthService, RoleRepository],
    exports: [AuthService, RoleRepository],
})
export class AuthModule {}
