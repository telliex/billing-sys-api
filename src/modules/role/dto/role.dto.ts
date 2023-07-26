import { Injectable } from '@nestjs/common';
import { Transform, Expose } from 'class-transformer';
import { IsNotEmpty, MaxLength, IsInt, IsString, IsOptional } from 'class-validator';

// import { snakeCase } from 'lodash';

@Injectable()
export class RoleDto {
    @IsString()
    @IsNotEmpty({ groups: ['update'], message: 'id required' })
    id: string;

    @IsNotEmpty({ message: 'role name required' })
    @Expose({ name: 'role_name' })
    @Transform(({ value }) => value, { toPlainOnly: true })
    roleName: string;

    @IsNotEmpty({ message: 'role value required' })
    @Expose({ name: 'role_value' })
    @Transform(({ value }) => value, { toPlainOnly: true })
    roleValue: string;

    @IsString()
    @MaxLength(255, {
        message: 'remark max length is 255',
    })
    remark: string;

    @IsString()
    @MaxLength(100, {
        message: 'Permission string max length is 100',
    })
    menuPermission: string;

    @IsInt()
    status: number;

    @IsInt()
    @IsNotEmpty({ groups: ['update'], message: 'user required' })
    @Expose({ name: 'add_master' })
    @Transform(({ value }) => value, { toPlainOnly: true })
    addMaster: number;

    @IsString()
    @Expose({ name: 'add_master_name' })
    @Transform(({ value }) => value, { toPlainOnly: true })
    addMasterName: string;

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
    @Expose({ name: 'change_master_name' })
    @Transform(({ value }) => value, { toPlainOnly: true })
    changeMasterName: string;

    @IsString()
    @Expose({ name: 'change_time' })
    @Transform(({ value }) => value, { toPlainOnly: true })
    changeTime: string;
}

export class FilterParamDto {
    @IsString()
    @IsOptional()
    roleName: string;

    @IsInt()
    @IsOptional()
    status: number;
}
