import { Injectable } from '@nestjs/common';
import { Transform, Expose } from 'class-transformer';
import { IsDate, IsInt, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

@Injectable()
export class UserDto {
    @IsString()
    @IsNotEmpty({ groups: ['update'], message: 'user id required' })
    id: string;

    @IsNotEmpty({ message: 'user name required' })
    @Expose({ name: 'display_name' })
    @Transform(({ value }) => value, { toPlainOnly: true })
    displayName: string;

    @IsString()
    @MaxLength(255, {
        message: 'avatar max length is 255',
    })
    avatar: string;

    @IsString()
    @IsNotEmpty({ message: 'password required' })
    @MaxLength(255, {
        message: 'password max length is 255',
    })
    password: string;

    @IsString()
    @MaxLength(255, {
        message: 'remark max length is 255',
    })
    remark: string;

    @IsInt()
    hide: number;

    @IsString()
    sex: string;

    @IsDate()
    birthday: Date;

    @IsString()
    tel: string;

    @IsString()
    mobile: string;

    @IsString()
    @IsNotEmpty({ message: 'email required' })
    email: string;

    @IsString()
    address: string;

    @IsString()
    country: string;

    @IsDate()
    @Expose({ name: 'password_time' })
    @Transform(({ value }) => value, { toPlainOnly: true })
    passwordTime: Date;
}

export class FilterParamDto {
    @IsString()
    @IsOptional()
    userName: string;

    @IsInt()
    @IsOptional()
    realName: string;
}
