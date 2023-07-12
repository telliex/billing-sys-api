import { Controller, Get, Post, Body, Patch, Param, Delete, Headers, Query } from '@nestjs/common';

import { HeaderParamDto } from '../restful/dto';

import { RoleDto, FilterParamDto } from './dto';

import { RoleService } from './role.service';

@Controller('api/v1.0/system/role')
export class RoleController {
    constructor(private readonly roleService: RoleService) {}

    @Post()
    async create(@Headers() headers: HeaderParamDto, @Body() createRoleDto: RoleDto) {
        return this.roleService.create(createRoleDto, headers);
    }

    @Get()
    findAll(@Headers() headers: HeaderParamDto, @Query() filterParam: FilterParamDto) {
        return this.roleService.findAll(headers, filterParam);
    }

    @Get(':id')
    findOne(@Headers() headers: HeaderParamDto, @Param('id') id: string) {
        return this.roleService.findOne(id, headers);
    }

    @Patch(':id')
    async update(
        @Headers() headers: HeaderParamDto,
        @Param('id') id: string,
        @Body() updateRoleDto: RoleDto,
    ) {
        return this.roleService.update(id, updateRoleDto, headers);
    }

    @Patch('status/:id')
    async setRoleStatus(
        @Headers() headers: HeaderParamDto,
        @Param('id') id: string,
        @Body('status') status: number,
    ) {
        console.log('status:', status);
        return this.roleService.setRoleStatus(id, status, headers);
    }

    @Delete(':id')
    async remove(@Headers() headers: HeaderParamDto, @Param('id') id: string) {
        return this.roleService.remove(id, headers);
    }
}
