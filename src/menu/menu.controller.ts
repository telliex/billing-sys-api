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
import { MenuService } from './menu.service';

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}
  // List the menu list
  @Get()
  findAlll(@Query() paginationQuery) {
    // const { limit, offset } = paginationQuery;
    return this.menuService.findAll();
  }
  // Get the menu item
  @Get(':id')
  findOne(@Param('id') id: number) {
    // return `This is menu ${id} .`;
    return this.menuService.findOne(Number(id));
  }
  // Delete the menu item
  @Delete(':id')
  remove(@Param('id') id: number) {
    // return `menu ${id} has deleted.`;
    return this.menuService.remove(Number(id));
  }
  // Create the menu item
  @Post()
  create(@Body() body) {
    return body;
    // return 'menu item has created.';
    return this.menuService.create(body);
  }
  // cover the menu item
  @Put(':id')
  cover(@Param('id') id: number, @Body() body) {
    return this.menuService.cover(Number(id), body);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() body) {
    return this.menuService.update(Number(id), body);
  }
}
