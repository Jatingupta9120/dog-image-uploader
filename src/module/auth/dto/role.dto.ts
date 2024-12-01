import { IsBoolean, IsIn, IsString } from 'class-validator';
import { RoleType } from '../constants/auth.constants';

export class RoleDto {
    @IsIn([RoleType.ADMIN, RoleType.USER])
    public roleName: string;

}
