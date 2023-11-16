import { Injectable } from '@nestjs/common';
import { Transform, Expose } from 'class-transformer';
import {
    IsNotEmpty,
    MaxLength,
    IsDate,
    IsInt,
    IsString,
    Max,
    Min,
    IsOptional,
} from 'class-validator';

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

    @IsInt()
    @IsNotEmpty({ message: 'type required' })
    type: number;

    @IsString()
    @MaxLength(255, {
        message: 'Menu name content max length is 255',
    })
    @IsNotEmpty({ message: 'Menu Name required' })
    @Expose({ name: 'menu_name' })
    @Transform(({ value }) => value, { toPlainOnly: true })
    menuName: string;

    // @IsString()
    // @MaxLength(255, {
    //     message: 'Menu name content max length is 255',
    // })
    // @IsNotEmpty({ message: 'type required' })
    // @Expose({ name: 'alias' })
    // @Transform(({ value }) => value, { toPlainOnly: true })
    // alias: string;

    @IsString()
    @MaxLength(255, {
        message: 'Description content max length is 255',
    })
    description: string;

    @IsString()
    // @MaxLength(100, {
    //     message: 'Permission string max length is 100',
    // })
    permission: string;

    @IsString()
    @MaxLength(255, {
        message: 'Component max length is 255',
    })
    @IsNotEmpty({ message: 'component required' })
    component: string;

    @IsString()
    @MaxLength(100, {
        // 255
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
    @IsNotEmpty({ message: 'route path required' })
    @Expose({ name: 'route_path' })
    @Transform(({ value }) => value, { toPlainOnly: true })
    routePath: string;

    @IsInt()
    @IsNotEmpty({ message: 'order No required' })
    @Min(0)
    @Max(10000)
    @Expose({ name: 'sort_no' })
    @Transform(({ value }) => value, { toPlainOnly: true })
    sortNo: number; // order_no

    @IsString()
    @MaxLength(50, {
        message: 'Icon string max length is 50',
    })
    icon: string;

    @IsString()
    @Expose({ name: 'parent_menu' })
    @Transform(({ value }) => value, { toPlainOnly: true })
    parentMenu: string;

    @IsInt()
    @Expose({ name: 'is_ext' })
    @Transform(({ value }) => value, { toPlainOnly: true })
    isExt: number;

    // @IsInt()
    // @Expose({ name: 'is_cache' })
    // @Transform(({ value }) => value, { toPlainOnly: true })
    // isCache: number;

    // @IsString()
    // @MaxLength(255, {
    //     message: 'Route name content max length is 255',
    // })
    // @IsNotEmpty({ message: 'type required' })
    // @Expose({ name: 'cache_name' })
    // @Transform(({ value }) => value, { toPlainOnly: true })
    // cacheName: string;

    // @IsInt()
    // @Expose({ name: 'is_show' })
    // @Transform(({ value }) => value, { toPlainOnly: true })
    // isShow: number;

    @IsInt()
    @IsNotEmpty({ message: 'Status required' })
    status: number;

    // @IsString()
    // @Expose({ name: 'menu_buttons' })
    // @Transform(({ value }) => value, { toPlainOnly: true })
    // menuButtons: string;

    @IsString()
    @IsNotEmpty({ groups: ['update'], message: 'Add Master required' })
    @Expose({ name: 'add_master' })
    @Transform(({ value }) => value, { toPlainOnly: true })
    addMaster: number;

    // @IsString()
    // @Expose({ name: 'add_master_name' })
    // @Transform(({ value }) => value, { toPlainOnly: true })
    // addMasterName: string;

    @IsDate()
    @IsNotEmpty({ groups: ['update'], message: 'Add time required' })
    @Expose({ name: 'add_time' })
    @Transform(({ value }) => value, { toPlainOnly: true })
    addTime: string;

    @IsString()
    @Expose({ name: 'change_master' })
    @Transform(({ value }) => value, { toPlainOnly: true })
    changeMaster: number;

    // @IsString()
    // @Expose({ name: 'change_master_name' })
    // @Transform(({ value }) => value, { toPlainOnly: true })
    // changeMasterName: string;

    @IsDate()
    @Expose({ name: 'change_time' })
    @Transform(({ value }) => value, { toPlainOnly: true })
    changeTime: string;
}

export class FilterParamDto {
    @IsString()
    @IsOptional()
    menuName: string;

    @IsInt()
    @IsOptional()
    status: number;
}
