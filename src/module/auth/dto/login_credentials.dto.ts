import { IsNotEmpty, IsString } from 'class-validator';

export class LoginCredentialsDto {
    @IsString()
    @IsNotEmpty()
    userName: string;

    @IsString()
    @IsNotEmpty()
    password: string;
}
