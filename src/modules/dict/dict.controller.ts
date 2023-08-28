import { Controller, Get, Param, Headers, Query, Patch, Body } from '@nestjs/common';

import { HeaderParamDto } from '../restful/dto/api.dto';

import { DictService } from './dict.service';
import { CreateDictDto } from './dto';
// import { CreateDictDto } from './dto/dict.dto';

@Controller('api/v1.0/system/dict')
export class DictController {
    constructor(private readonly dictService: DictService) {}

    // @Post()
    // create(@Body() createDictDto: CreateDictDto) {
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

    @Patch(':id')
    update(
        @Headers() headers: HeaderParamDto,
        @Param('id') id: string,
        @Body() updateDictDto: CreateDictDto,
    ) {
        return this.dictService.update(+id, updateDictDto);
    }

    // @Delete(':id')
    // remove(@Param('id') id: string) {
    //     return this.dictService.remove(+id);
    // }
}
