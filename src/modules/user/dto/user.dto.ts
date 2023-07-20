import { Injectable } from '@nestjs/common';
import { Transform, Expose } from 'class-transformer';
import { IsInt, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

@Injectable()
export class UserDto {
    @IsString()
    @IsNotEmpty({ groups: ['update'], message: 'user id required' })
    id: string;

    @IsNotEmpty({ message: 'user name required' })
    @Expose({ name: 'user_name' })
    @Transform(({ value }) => value, { toPlainOnly: true })
    userName: string;

    @IsNotEmpty({ message: 'real name required' })
    @Expose({ name: 'real_name' })
    @Transform(({ value }) => value, { toPlainOnly: true })
    realName: string;

    @IsString()
    @MaxLength(255, {
        message: 'avatar max length is 255',
    })
    avatar: string;

    @IsString()
    @MaxLength(255, {
        message: 'desc max length is 255',
    })
    desc: string;

    // set checkPassword(value: string)
    @IsString()
    @IsNotEmpty({ message: 'password  required' })
    password: string;

    @IsString()
    token: string;

    @IsString()
    @Expose({ name: 'home_path' })
    @Transform(({ value }) => value, { toPlainOnly: true })
    homePath: string;

    @IsString()
    roles: string;

    @IsInt()
    @IsNotEmpty({ groups: ['update'], message: 'user required' })
    @Expose({ name: 'add_master' })
    @Transform(({ value }) => value, { toPlainOnly: true })
    addMaster: number;

    @IsString()
    @IsNotEmpty({ groups: ['update'], message: 'add time required' })
    @Expose({ name: 'add_time' })
    @Transform(({ value }) => value, { toPlainOnly: true })
    addTime: string;

    @IsInt()
    @Expose({ name: 'change_master' })
    @Transform(({ value }) => value, { toPlainOnly: true })
    changeMaster: number;

    @IsString()
    @Expose({ name: 'change_time' })
    @Transform(({ value }) => value, { toPlainOnly: true })
    changeTime: string;
}

export class FilterParamDto {
    @IsString()
    @IsOptional()
    userName: string;

    @IsInt()
    @IsOptional()
    realName: string;
}
