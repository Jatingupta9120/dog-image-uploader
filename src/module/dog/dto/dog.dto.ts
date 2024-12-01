import {
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsString,
    IsUUID,
} from 'class-validator';

export class GetDogPicParamDto {
    @IsUUID()
    @IsNotEmpty()
    id: string;
}
export class CreatePicDTO {
    @IsOptional()
    @IsString()
    public breed?: string;

    @IsOptional()
    @IsNumber()
    public age?: number;

    @IsOptional()
    @IsString()
    public color?: string;
}

export class UpdatePicDTO {
    @IsOptional()
    @IsString()
    public breed?: string;

    @IsOptional()
    public age?: number;

    @IsOptional()
    @IsString()
    public color?: string;
}
