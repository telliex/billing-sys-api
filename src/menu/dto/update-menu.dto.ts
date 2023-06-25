import { Injectable } from '@nestjs/common';
import { PartialType } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

import { MenuDto } from './menu.dto';

@Injectable()
export class UpdateMenuDto extends PartialType(MenuDto) {
    // @IsNumber(undefined, { groups: ['update'], message: '帖子ID格式错误' })
    // @IsDefined({ groups: ['update'], message: '帖子ID必须指定' })
    @IsNotEmpty({ groups: ['update'], message: 'id required' })
    id: string;
}
