/*
 * @Description:
 * @Anthor: Telliex
 * @Date: 2023-06-12 22:27:23
 * @LastEditors: Telliex
 * @LastEditTime: 2023-06-14 06:32:23
 */
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
  Headers,
} from '@nestjs/common';
import { MenuService } from './menu.service';
// import { CreateMenuDto, UpdateMenuDto } from './menu.dto';

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}
  // List the menu list
  @Get()
  async findAlll() {
    // const { limit, offset } = paginationQuery;
    return await this.menuService.findAll();
  }
  // Get the menu item
  @Get(':id')
  async findOne(@Param('id') id: string) {
    // return `This is menu ${id} .`;
    return await this.menuService.findOne(id);
  }
  // Delete the menu item
  @Delete(':id')
  async remove(@Param('id') id: string) {
    // return `menu ${id} has deleted.`;
    return await this.menuService.remove(id);
  }
  // Create the menu item
  @Post()
  create(@Headers() headers, @Body() body) {
    return this.menuService.create(body, headers);
  }
  // // cover the menu item
  @Put(':id')
  update(@Headers() headers, @Param('id') id: string, @Body() body) {
    return this.menuService.update(id, body, headers);
  }

  // @Patch(':id')
  // cover(@Param('id') id: string, @Body() body) {
  //   return this.menuService.cover(id, body);
  // }
}
