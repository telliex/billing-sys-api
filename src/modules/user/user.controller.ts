import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    Headers,
    Query,
    UseGuards,
} from '@nestjs/common';

import { JwtAuthGuard } from '@/common/jwt-auth.guard';

import { HeaderParamDto } from '../restful/dto';

import { UserDto, FilterParamDto } from './dto';
import { UserService } from './user.service';

@Controller('api/v1.0/system/user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    @UseGuards(JwtAuthGuard)
    create(@Headers() headers: HeaderParamDto, @Body() createDto: UserDto) {
        return this.userService.create(createDto, headers);
    }

    @Get()
    @UseGuards(JwtAuthGuard)
    findAll(@Headers() headers: HeaderParamDto, @Query() filterParam: FilterParamDto) {
        return this.userService.findAll(filterParam, headers);
    }

    @Get('exist')
    @UseGuards(JwtAuthGuard)
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
    @UseGuards(JwtAuthGuard)
    findOne(@Headers() headers: HeaderParamDto, @Param('id') id: string) {
        return this.userService.findOne(id, headers);
    }

    @Patch(':id')
    @UseGuards(JwtAuthGuard)
    update(
        @Headers() headers: HeaderParamDto,
        @Param('id') id: string,
        @Body() updateDto: UserDto,
    ) {
        return this.userService.update(id, updateDto, headers);
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard)
    remove(@Headers() headers: HeaderParamDto, @Param('id') id: string) {
        return this.userService.remove(id, headers);
    }

    findUserByMGTId(@Headers() headers: HeaderParamDto, @Query('mgtNumber') mgtNumber: number) {
        return this.userService.findUserByMGTId(mgtNumber);
    }
}
