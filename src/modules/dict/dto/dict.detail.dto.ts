import { Injectable } from '@nestjs/common';
import { Transform, Expose } from 'class-transformer';
import { IsNotEmpty, MaxLength, IsInt, IsString } from 'class-validator';

// import { snakeCase } from 'lodash';

@Injectable()
export class CreateDictDetailDto {
    @IsString()
    @IsNotEmpty({ groups: ['update'], message: 'id required' })
    id: string;

    @IsNotEmpty({ message: 'dict id required' })
    @Expose({ name: 'dict_id' })
    @Transform(({ value }) => value, { toPlainOnly: true })
    dictId: string;

    @IsNotEmpty({ message: 'dict item name required' })
    @Expose({ name: 'dict_item_name' })
    @Transform(({ value }) => value, { toPlainOnly: true })
    dictItemName: string;

    @IsNotEmpty({ message: 'dict item value required' })
    @Expose({ name: 'dict_item_value' })
    @Transform(({ value }) => value, { toPlainOnly: true })
    dictItemValue: string;

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
