import { Controller, Get, Param, Headers, Query, Patch, Body } from '@nestjs/common';

import { HeaderParamDto } from '../../restful/dto/api.dto';

import { DictDto } from '../dto';
import { DictService } from '../services/dict.service';

@Controller('api/v1.0/system/dict')
export class DictController {
    constructor(private readonly dictService: DictService) {}

    // @Post()
    // create(@Body() createDictDto: DictDto) {
    //     return this.dictService.create(createDictDto);
    // }

    @Get()
    findAll(@Headers() headers: HeaderParamDto, @Query() filterParam: any) {
        return this.dictService.findAll(filterParam, headers);
    }

    @Get(':dictName')
    findOne(@Headers() headers: HeaderParamDto, @Param('dictName') dictName: string) {
        return this.dictService.findOne(dictName, headers);
    }

    @Patch(':dictName')
    update(
        @Headers() headers: HeaderParamDto,
        @Param('dictName') dictName: string,
        @Body() createDictDto: DictDto,
    ) {
        return this.dictService.update(dictName, createDictDto, headers);
    }

    // @Delete(':id')
    // remove(@Param('id') id: string) {
    //     return this.dictService.remove(+id);
    // }
}
