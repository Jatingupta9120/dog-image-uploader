import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService as NestJwtService, JwtSignOptions } from '@nestjs/jwt';
import { errorName } from 'src/constants/error';
@Injectable()
export class JwtService {
    constructor(
        private readonly jwtService: NestJwtService,
        private congigService: ConfigService,
    ) {}
    sign(payload: any, options?: JwtSignOptions): string {
        return this.jwtService.sign(payload, options);
    }

    async verify(token: string, options?: JwtSignOptions) {
        try {
            console.log(token, options, '2333333333333333333333333');
            const a = await this.jwtService.verify(token, options);
            console.log(a, ';;;;;;;;;;;;;;;;;;;;;;;');
            return a;
        } catch (err) {
            return null;
        }
    }

    decode(token: string): any {
        try {
            return this.jwtService.decode(token);
        } catch (err) {
            return null;
        }
    }

    validateJwt(token: string) {
        try {
            return this.jwtService.verify(token);
        } catch (err: any) {
            const errorMessage = err.message;
            if (errorMessage == 'jwt expired') {
                // throw new Error(errorName.AUTH_ACCESS_TOKEN_EXPIRE);
            } else {
                // throw new Error(errorName.AUTH_INVALID_ACCESS_TOKEN);
            }
        }
    }
}
