import { Body, Controller, Inject, Post, Req, Res } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Response } from 'express';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { responseName } from 'src/constants/response';
import { PaginationService } from 'src/utils/pagination/pagination.service';
import { Response as ResponseCustom } from 'src/utils/response/response.decorator';
import { Logger } from 'winston';
import { LoginCredentialsDto } from '../dto/login_credentials.dto';
import { MyRequest } from '../interface/my_request.interface';
import { iAuthTokenInfo } from '../interface/token.interface';
import { AuthService } from '../service/auth.service';

@Controller()
export class AuthController {
    constructor(
        @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
        private authService: AuthService,
        private configService: ConfigService,
        private paginationService: PaginationService,
    ) {}

    @Post()
    @ResponseCustom(responseName.LOGIN)
    async login(
        @Body() loginCredentials: LoginCredentialsDto,
        @Res({ passthrough: true }) res: Response,
        @Req() req: MyRequest,
    ) {
        this.logger.info('AuthController :: login  ::  param  :: ', {
            loginCredentials,
        });
        const user = await this.authService.validateUser({
            userName: loginCredentials.userName,
        });
        console.log('------------------------------------------------', {
            req,
        });

        await this.authService.comparePasswords(
            loginCredentials.password,
            user?.id,
            user?.password,
        );

        const role = await this.authService.getUserRole(user.roleId);

        const authTokenInfo: iAuthTokenInfo = {
            id: user.id,
            role: role.name,
        };

        const tokens = await this.authService.getAuthToken(authTokenInfo);

        await this.authService.setTokenInHeader(res, tokens);

        return {
            userId: user.id,
            userName: user.userName,
            name: user.name,
            emails: user.email,
            roleId: role.id,
            role: role.name,
        };
    }
}
