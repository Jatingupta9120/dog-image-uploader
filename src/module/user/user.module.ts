import { forwardRef, Module } from '@nestjs/common';
import { RoleRepository } from '../auth/repository/role.repository';
import { UserController } from './controller/user.controller';
import { UserRepository } from './repository/user.repository';
import { UserService } from './service/user.service';
import { AuthModule } from '../auth/auth.module';

@Module({
    imports: [
        forwardRef(() => AuthModule), // Wrap AuthModule import with forwardRef()
    ],
    controllers: [UserController],
    providers: [UserService, UserRepository, RoleRepository],
    exports: [UserRepository],
})
export class UserModule {}
