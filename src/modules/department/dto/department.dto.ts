import { Injectable } from '@nestjs/common';
import { Transform, Expose } from 'class-transformer';
import { IsNotEmpty, MaxLength, IsInt, IsString, Max, Min, IsOptional } from 'class-validator';

// import { snakeCase } from 'lodash';

@Injectable()
export class DepartmentDto {
    @IsString()
    @IsNotEmpty({ groups: ['update'], message: 'depr id required' })
    id: string;

    @IsString()
    @MaxLength(255, {
        message: 'Menu name content max length is 255',
    })
    @IsNotEmpty({ message: 'type required' })
    @Expose({ name: 'dept_name' })
    @Transform(({ value }) => value, { toPlainOnly: true })
    deptName: string;

    @IsInt()
    @IsNotEmpty({ message: 'order No required' })
    @Min(0)
    @Max(10000)
    @Expose({ name: 'order_no' })
    @Transform(({ value }) => value, { toPlainOnly: true })
    orderNo: number;

    @IsString()
    @Expose({ name: 'parent_dept' })
    @Transform(({ value }) => value, { toPlainOnly: true })
    parentDept: string;

    @IsString()
    @MaxLength(255, {
        message: 'remark max length is 255',
    })
    remark: string;

    @IsInt()
    @IsNotEmpty({ message: 'status required' })
    status: number;

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
    deptName: string;

    @IsInt()
    @IsOptional()
    status: number;
}
