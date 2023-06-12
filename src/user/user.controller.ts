import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Body,
  Patch,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  // List the user list
  @Get()
  findAlll(@Query() paginationQuery) {
    // const { limit, offset } = paginationQuery;
    return this.userService.findAll();
  }
  // Get the user item
  @Get(':id')
  findOne(@Param('id') id: number) {
    // return `This is user ${id} .`;
    return this.userService.findOne(Number(id));
  }
  // Delete the user item
  @Delete(':id')
  remove(@Param('id') id: number) {
    // return `user ${id} has deleted.`;
    return this.userService.remove(Number(id));
  }
  // Create the user item
  @Post()
  create(@Body() body) {
    return body;
    // return 'user item has created.';
    return this.userService.create(body);
  }
  // cover the user item
  @Put(':id')
  cover(@Param('id') id: number, @Body() body) {
    return this.userService.cover(Number(id), body);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() body) {
    return this.userService.update(Number(id), body);
  }
}
