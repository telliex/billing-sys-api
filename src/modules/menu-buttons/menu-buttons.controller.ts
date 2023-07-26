import { Controller, Get, Post, Body, Patch, Param, Delete, Headers, Query } from '@nestjs/common';

import { HeaderParamDto } from '../restful/dto';

import { MenuButtonDto, FilterParamDto } from './dto';
import { MenuButtonsService } from './menu-buttons.service';

@Controller('api/v1.0/system/menu-buttons')
export class MenuButtonsController {
    constructor(private readonly menuButtonsService: MenuButtonsService) {}

    @Post()
    async create(@Headers() headers: HeaderParamDto, @Body() createDto: MenuButtonDto) {
        return this.menuButtonsService.create(createDto, headers);
    }

    @Get()
    findAll(@Headers() headers: HeaderParamDto, @Query() filterParam: FilterParamDto) {
        return this.menuButtonsService.findAll(filterParam, headers);
    }

    @Get(':id')
    findOne(@Headers() headers: HeaderParamDto, @Param('id') id: string) {
        return this.menuButtonsService.findOne(id, headers);
    }

    @Patch(':id')
    async update(
        @Headers() headers: HeaderParamDto,
        @Param('id') id: string,
        @Body() updateDto: MenuButtonDto,
    ) {
        return this.menuButtonsService.update(id, updateDto, headers);
    }

    @Delete(':id')
    async remove(@Headers() headers: HeaderParamDto, @Param('id') id: string) {
        return this.menuButtonsService.remove(id, headers);
    }
}
