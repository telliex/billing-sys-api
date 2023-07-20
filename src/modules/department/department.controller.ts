import { Controller, Get, Post, Body, Patch, Param, Delete, Headers, Query } from '@nestjs/common';

import { HeaderParamDto } from '../restful/dto';

import { DepartmentService } from './department.service';
import { DepartmentDto, FilterParamDto } from './dto';

@Controller('api/v1.0/system/department')
export class DepartmentController {
    constructor(private readonly departmentService: DepartmentService) {}

    @Post()
    create(@Headers() headers: HeaderParamDto, @Body() createDto: DepartmentDto) {
        return this.departmentService.create(createDto, headers);
    }

    @Get()
    findAll(@Headers() headers: HeaderParamDto, @Query() filterParam: FilterParamDto) {
        return this.departmentService.findAll(filterParam, headers);
    }

    @Get(':id')
    findOne(@Headers() headers: HeaderParamDto, @Param('id') id: string) {
        return this.departmentService.findOne(id, headers);
    }

    @Patch(':id')
    update(
        @Headers() headers: HeaderParamDto,
        @Param('id') id: string,
        @Body() updateDto: DepartmentDto,
    ) {
        return this.departmentService.update(id, updateDto, headers);
    }

    @Delete(':id')
    remove(@Headers() headers: HeaderParamDto, @Param('id') id: string) {
        return this.departmentService.remove(id, headers);
    }
}
