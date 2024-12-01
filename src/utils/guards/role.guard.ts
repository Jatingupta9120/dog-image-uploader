import {
    Injectable,
    CanActivate,
    ExecutionContext,
    Inject,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { MyRequest } from 'src/module/auth/interface/my_request.interface';
import { Logger } from 'winston';

@Injectable()
export class RoleGuard implements CanActivate {
    constructor(
        private reflector: Reflector,
        @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
    ) {}
    canActivate(context: ExecutionContext): boolean {
        const roles =
            this.reflector.get<string[]>('roles', context.getHandler()) ?? [];
        this.logger.info(
            'Role Guard :: Role Allowed To Access this rout :: ',
            roles,
        );
        if (roles.length == 0) return true;

        // Getting user from request header
        const request = context.switchToHttp().getRequest<MyRequest>();
        const xUserRoleName: string = request.userInfo.role;

        // Checking role is valid or not
        const userRole = xUserRoleName ?? '';
        const isValid = roles.includes(userRole);
        return isValid;
    }
}
