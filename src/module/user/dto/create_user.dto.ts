import { Type } from 'class-transformer';
import { IsEmail, IsIn, IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { RoleType } from 'src/module/auth/constants/auth.constants';

export class UserDTO {

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    userName: string;

    @IsNotEmpty()
    @IsString()
    password: string;

    @Type(() => Date)
    birthDate: Date;
}

export class CreateUserDTO extends UserDTO {
    @IsNotEmpty()
    @IsIn([RoleType.ADMIN, RoleType.USER])
    role: string;
}

export class GetUserPathParams {
    @IsNotEmpty()
    @IsUUID(4)
    id: string;
}

export class LoginDto {
    @IsNotEmpty()
    @IsString()
    userName: string;

    @IsNotEmpty()
    @IsString()
    password: string;
}
