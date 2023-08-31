import { Injectable } from '@nestjs/common';
import { Transform, Expose } from 'class-transformer';
import { IsNotEmpty, MaxLength, IsInt, IsString } from 'class-validator';

// import { snakeCase } from 'lodash';

@Injectable()
export class CreateDictDto {
    @IsString()
    @IsNotEmpty({ groups: ['update'], message: 'id required' })
    id: string;

    @IsNotEmpty({ message: 'dict name required' })
    @Expose({ name: 'dict_name' })
    @Transform(({ value }) => value, { toPlainOnly: true })
    dictName: string;

    @IsNotEmpty({ message: 'dict value required' })
    @Expose({ name: 'dict_value' })
    @Transform(({ value }) => value, { toPlainOnly: true })
    dictValue: string;

    @IsString()
    @MaxLength(255, {
        message: 'remark max length is 255',
    })
    remark: string;

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
