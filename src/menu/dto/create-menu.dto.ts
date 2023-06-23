
import { Injectable } from '@nestjs/common';
import { IsNotEmpty, MaxLength } from 'class-validator';


import { Transform, Expose } from 'class-transformer';
// import { snakeCase } from 'lodash';

@Injectable()
export class CreateMenuDto {
    // @MaxLength(255, {
    //     always: true,
    //     message: '帖子标题长度最大为$constraint1',
    // })
    // @IsNotEmpty({ groups: ['create'], message: '帖子标题必须填写' })
    // @IsOptional({ groups: ['update'] })


    @IsNotEmpty({ groups: ['create'], message: 'type required' })
    type: string;

    @MaxLength(255, {
        always: true,
        message: 'max length is 255',
    })
    @IsNotEmpty({ groups: ['create'], message: 'type required' })
    @Expose({ name: 'menu_name' })
    @Transform(({ value }) => value, { toPlainOnly: true })
    menuName: string;

    @MaxLength(255, {
      always: true,
      message: 'max length is 255',
    })
    description: string;

    @MaxLength(100, {
      always: true,
      message: 'max length is 100',
    })
    permission: string;

    @MaxLength(255, {
      always: true,
      message: 'max length is 255',
    })
    @IsNotEmpty({ groups: ['create'], message: 'component required' })
    component: string;

    @MaxLength(100, {
      always: true,
      message: 'max length is 100',
    })
    @IsNotEmpty({ groups: ['create'], message: 'component name required' })
    @Expose({ name: 'component_name' })
    @Transform(({ value }) => value, { toPlainOnly: true })
    componentName: string;

    @MaxLength(500, {
      always: true,
      message: 'max length is 500',
    })
    @IsNotEmpty({ groups: ['create'], message: 'rout path required' })
    @Expose({ name: 'rout_path' })
    @Transform(({ value }) => value, { toPlainOnly: true })
    routPath: string;

    @MaxLength(11, {
      always: true,
      message: 'max length is 11',
    })
    @Expose({ name: 'order_no' })
    @Transform(({ value }) => value, { toPlainOnly: true })
    orderNo: number;

    @MaxLength(50, {
      always: true,
      message: 'max length is 50',
    })
    icon: string;

    @Expose({ name: 'parent_menu' })
    @Transform(({ value }) => value, { toPlainOnly: true })
    parentMenu: string;

    @Expose({ name: 'is_ext' })
    @Transform(({ value }) => value, { toPlainOnly: true })
    isExt: number;

    @Expose({ name: 'is_cache' })
    @Transform(({ value }) => value, { toPlainOnly: true })
    isCache: number;

    @Expose({ name: 'is_show' })
    @Transform(({ value }) => value, { toPlainOnly: true })
    isShow: number;

    status: number;

    @Expose({ name: 'add_master' })
    @Transform(({ value }) => value, { toPlainOnly: true })
    addMaster: number;

    @Expose({ name: 'add_time' })
    @Transform(({ value }) => value, { toPlainOnly: true })
    addTime: string;

    @Expose({ name: 'change_master' })
    @Transform(({ value }) => value, { toPlainOnly: true })
    changeMaster: number;

    @Expose({ name: 'change_time' })
    @Transform(({ value }) => value, { toPlainOnly: true })
    changeTime: string;
}
