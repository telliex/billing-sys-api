import { Injectable } from '@nestjs/common';
import { Transform, Expose } from 'class-transformer';
import { IsNotEmpty, MaxLength, IsInt, IsString, IsOptional } from 'class-validator';

// import { snakeCase } from 'lodash';

@Injectable()
export class MenuButtonDto {
    @IsString()
    @IsNotEmpty({ message: 'id required' })
    id: string;

    @IsString()
    @MaxLength(255, {
        message: 'Menu name content max length is 255',
    })
    @IsNotEmpty({ message: 'type required' })
    @Expose({ name: 'button_name' })
    @Transform(({ value }) => value, { toPlainOnly: true })
    buttonName: string;

    @IsString()
    @MaxLength(255, {
        message: 'Description content max length is 255',
    })
    description: string;

    @IsString()
    @Expose({ name: 'belong_name' })
    @IsNotEmpty({ message: 'belong menu id required' })
    belongMenu: string;

    @IsString()
    @MaxLength(100, {
        message: 'Permission string max length is 100',
    })
    permission: string;

    @IsInt()
    @Expose({ name: 'is_show' })
    @Transform(({ value }) => value, { toPlainOnly: true })
    isShow: number;

    @IsInt()
    @IsNotEmpty({ message: 'user required' })
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
    belongMenuId: string;

    @IsInt()
    @IsOptional()
    status: number;
}
