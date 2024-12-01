import { Transform } from 'class-transformer';
import {
    IsBoolean,
    IsIn,
    IsNotEmpty,
    IsOptional,
    IsUUID,
} from 'class-validator';
import { RoleType } from 'src/module/auth/constants/auth.constants';
import { PaginationDto } from 'src/utils/pagination/dto/paginationQueryParam.dto';

export class UserIdParamDTO {
    @IsNotEmpty()
    @IsUUID()
    id: string;
}

export class GetUserQueryParamDTO extends PaginationDto {
    @IsNotEmpty()
    @IsIn([RoleType.ADMIN, RoleType.USER])
    userType: string;

    @IsBoolean()
    @IsOptional()
    @Transform(({ value }) => (value as string) === 'true')
    public download: boolean;
}
