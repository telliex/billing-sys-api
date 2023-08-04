import { Controller, Get, Post, Body, Patch, Param, Delete, Headers, Query } from '@nestjs/common';

import { HeaderParamDto } from '../restful/dto';

import { UserDto, FilterParamDto } from './dto';
import { UserService } from './user.service';

@Controller('api/v1.0/system/user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    create(@Headers() headers: HeaderParamDto, @Body() createDto: UserDto) {
        return this.userService.create(createDto, headers);
    }

    @Get()
    findAll(@Headers() headers: HeaderParamDto, @Query() filterParam: FilterParamDto) {
        return this.userService.findAll(filterParam, headers);
    }

    @Get('exist')
    findOneIfExist(
        @Headers() headers: HeaderParamDto,
        @Query()
        param: {
            userName: string;
            id: string;
        },
    ) {
        return this.userService.findOneIfExist(param, headers);
    }

    @Get(':id')
    findOne(@Headers() headers: HeaderParamDto, @Param('id') id: string) {
        return this.userService.findOne(id, headers);
    }

    @Patch(':id')
    update(
        @Headers() headers: HeaderParamDto,
        @Param('id') id: string,
        @Body() updateDto: UserDto,
    ) {
        return this.userService.update(id, updateDto, headers);
    }

    @Delete(':id')
    remove(@Headers() headers: HeaderParamDto, @Param('id') id: string) {
        return this.userService.remove(id, headers);
    }

    findUserByMGTId(@Headers() headers: HeaderParamDto, @Query('mgtNumber') mgtNumber: number) {
        return this.userService.findUserByMGTId(mgtNumber);
    }
}
