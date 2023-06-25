import { Injectable } from '@nestjs/common';
import { Transform, Expose } from 'class-transformer';
import { IsNotEmpty, MaxLength, IsNumber, IsString, Max, Min } from 'class-validator';

// import { snakeCase } from 'lodash';

@Injectable()
export class MenuDto {
    // @MaxLength(255, {
    //
    //     message: '帖子标题长度最大为$constraint1',
    // })
    // @IsNotEmpty({ groups: ['create'], message: '帖子标题必须填写' })
    // @IsOptional({ groups: ['update'] })
    @IsString()
    @IsNotEmpty({ groups: ['update'], message: 'id required' })
    id: string;

    @IsString()
    @IsNotEmpty({ message: 'type required' })
    type: string;

    @IsString()
    @MaxLength(255, {
        message: 'Menu name content max length is 255',
    })
    @IsNotEmpty({ message: 'type required' })
    @Expose({ name: 'menu_name' })
    @Transform(({ value }) => value, { toPlainOnly: true })
    menuName: string;

    @IsString()
    @MaxLength(255, {
        message: 'Description content max length is 255',
    })
    description: string;

    @IsString()
    @MaxLength(100, {
        message: 'Permission string max length is 100',
    })
    permission: string;

    @IsString()
    @MaxLength(255, {
        message: 'Component max length is 255',
    })
    @IsNotEmpty({ message: 'component required' })
    component: string;

    @IsString()
    @MaxLength(100, {
        message: 'Component name max length is 100',
    })
    @IsNotEmpty({ message: 'Component name required' })
    @Expose({ name: 'component_name' })
    @Transform(({ value }) => value, { toPlainOnly: true })
    componentName: string;

    @IsString()
    @MaxLength(500, {
        message: 'Rout path max length is 500',
    })
    @IsNotEmpty({ message: 'rout path required' })
    @Expose({ name: 'rout_path' })
    @Transform(({ value }) => value, { toPlainOnly: true })
    routPath: string;

    @IsNumber()
    @IsNotEmpty({ message: 'order No required' })
    @Min(0)
    @Max(10000)
    @Expose({ name: 'order_no' })
    @Transform(({ value }) => value, { toPlainOnly: true })
    orderNo: number;

    @IsString()
    @MaxLength(50, {
        message: 'Icon string max length is 50',
    })
    icon: string;

    @IsString()
    @Expose({ name: 'parent_menu' })
    @Transform(({ value }) => value, { toPlainOnly: true })
    parentMenu: string;

    @IsNumber()
    @Expose({ name: 'is_ext' })
    @Transform(({ value }) => value, { toPlainOnly: true })
    isExt: number;

    @IsNumber()
    @Expose({ name: 'is_cache' })
    @Transform(({ value }) => value, { toPlainOnly: true })
    isCache: number;

    @IsNumber()
    @Expose({ name: 'is_show' })
    @Transform(({ value }) => value, { toPlainOnly: true })
    isShow: number;

    @IsNumber()
    @IsNotEmpty({ message: 'user required' })
    status: number;

    @IsNumber()
    @IsNotEmpty({ groups: ['update'], message: 'user required' })
    @Expose({ name: 'add_master' })
    @Transform(({ value }) => value, { toPlainOnly: true })
    addMaster: number;

    @IsString()
    @IsNotEmpty({ groups: ['update'], message: 'add time required' })
    @Expose({ name: 'add_time' })
    @Transform(({ value }) => value, { toPlainOnly: true })
    addTime: string;

    @IsNumber()
    @Expose({ name: 'change_master' })
    @Transform(({ value }) => value, { toPlainOnly: true })
    changeMaster: number;

    @IsString()
    @Expose({ name: 'change_time' })
    @Transform(({ value }) => value, { toPlainOnly: true })
    changeTime: string;
}
