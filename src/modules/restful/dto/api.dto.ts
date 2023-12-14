import { Injectable } from '@nestjs/common';
import { IsNotEmpty, IsString } from 'class-validator';

// import { snakeCase } from 'lodash';

@Injectable()
export class HeaderParamDto {
    @IsString()
    @IsNotEmpty({ message: 'user id required' })
    'user-id': string;

    @IsString()
    @IsNotEmpty({ message: 'time zone required' })
    'time-zone': string;

    @IsString()
    @IsNotEmpty({ message: 'Authorization zone required' })
    'Authorization': string;
}
