import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Response } from 'express';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Sequelize } from 'sequelize-typescript';
import { errorName } from '../../../constants/error/index';
import { UserRepository } from 'src/module/user/repository/user.repository';
import { HttpExceptionWrapper } from 'src/utils/error/error.http.wrapper';
import { HashService } from 'src/utils/hashing/hash.service';
import { Logger } from 'winston';
import { JwtService } from '../../../utils/jwtService/jwt.service';
import { MyRequest } from '../interface/my_request.interface';
import {
    iAuthTokenInfo,
    iAuthTokens,
    IValidateUser,
} from '../interface/token.interface';
import { RoleRepository } from '../repository/role.repository';

@Injectable()
export class AuthService {
    constructor(
        @Inject('SEQUELIZE') private readonly sequelizeConnection: Sequelize,
        private hashService: HashService,
        @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
        private configService: ConfigService,
        private jwtService: JwtService,
        private userRepository: UserRepository,
        private roleRepository: RoleRepository,
    ) {}

    async validateUser(userInfo: IValidateUser) {
        this.logger.info('AuthService :: validateUser  ::  param  :: ', {
            userInfo,
        });

        let user;
        if (userInfo.userName) {
            user = await this.userRepository.getUser({
                userName: userInfo.userName,
            });
        } else {
            user = await this.userRepository.getUser({
                id: userInfo.userId,
            });
        }

        if (!user) {
            throw new HttpExceptionWrapper(errorName.USER_DOES_NOT_EXIST);
        }

        return user;
    }

    async getAuthToken(userInfo: iAuthTokenInfo) {
        this.logger.info('AuthService :: getAuthToken  ::  param  :: ', {
            userInfo,
        });

        const accessTokenExpireIn = '6000s'; //I have hardcoded but in future i will use it from env

        const jwtSecretKey = 'mySecretKey'; //I have hardcoded but in future i will use it from env

        const accessToken = this.jwtService.sign(
            {
                type: 'accessToken',
                id: userInfo?.id,
                role: userInfo.role,
            },
            {
                expiresIn: accessTokenExpireIn,
                secret: jwtSecretKey,
            },
        );

        return {
            accessToken,
            tokenType: 'Bearer',
            userId: userInfo?.id,
        };
    }
    async setTokenInHeader(res: Response, tokens: iAuthTokens) {
        this.logger.info('AuthService :: setTokenInHeader  ::  param  :: ', {
            tokens,
        });

        const { accessToken, tokenType } = tokens;

        res.set({ 'x-access-token': accessToken });
        res.set({ 'x-token-type': tokenType });
    }

    async comparePasswords(password: string, userId: string, hash: string) {
        this.logger.info('AuthService :: comparePasswords  ::  param  :: ', {
            password,
            userId,
            hash,
        });
        const isMatched = await this.hashService.comparePassword(
            password,
            hash,
        );

        if (isMatched) {
            throw new HttpExceptionWrapper(errorName.INCORRECT_PASSWORD);
        }
    }

    async getUserInfoFromAccessToken(accessToken: string) {
        this.logger.info(
            'AuthService :: getUserInfoFromAccessToken  ::  param  :: ',
            { accessToken },
        );
        const jwtSecretKey = 'mySecretKey';
        const obj = await this.jwtService.verify(accessToken, {
            secret: jwtSecretKey,
        });
        console.log(obj, '232222222222222222222222222222222222222222');
        return obj;
    }

    async getUserRole(roleId: number) {
        this.logger.info('AuthService :: getUserRole  ::  param  :: ', {
            roleId,
        });
        return await this.roleRepository.getRoleById(roleId);
    }

    async validateUserByToken(userInfo: iAuthTokenInfo, req: MyRequest) {
        this.logger.info('AuthService :: validateUserByToken  ::  param  :: ', {
            userInfo,
        });
        const storedHash = 'hashed version of some string';

        const userAgent = req.headers['user-agent'];
        console.log(userAgent,"3333u9eyfiehivkd");
        return true;
        // if (!isValidUser)
        //     throw new HttpExceptionWrapper(errorName.INVALID_USER);
    }
}
