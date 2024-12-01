import { Module } from '@nestjs/common';
import { JwtService } from './jwt.service';
import { JwtModule } from '@nestjs/jwt';
@Module({
    imports: [JwtModule],
    providers: [JwtService],
    exports: [JwtService],
})
export class JWTModule {}
