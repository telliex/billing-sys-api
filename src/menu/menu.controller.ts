/*
 * @Description:
 * @Anthor: Telliex
 * @Date: 2023-06-12 22:27:23
 * @LastEditors: Telliex
 * @LastEditTime: 2023-06-16 05:48:08
 */
import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Headers,
  Body,
} from '@nestjs/common';
import { MenuService } from './menu.service';
// import { CreateMenuDto, UpdateMenuDto } from './menu.dto';

@Controller('system/menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}
  // constructor() {@InjectRepository(Menu) private readonly menuRepository: Repository<Menu>}
  // List the menu list
  @Get()
  async findAlll(@Headers() headers) {
    // const { limit, offset } = paginationQuery;
    return await this.menuService.findAll(headers);
  }
  // Get the menu item
  @Get(':id')
  async findOne(@Headers() headers, @Param('id') id: string) {
    // return `This is menu ${id} .`;
    return await this.menuService.findOne(id, headers);
  }
  // Delete the menu item
  @Delete(':id')
  async remove(@Headers() headers, @Param('id') id: string) {
    return await this.menuService.remove(id, headers);
  }
  // Create the menu item
  @Post()
  create(@Headers() headers, @Body() body) {
    return this.menuService.create(body, headers);
  }
  // cover the menu item
  @Put(':id')
  update(@Headers() headers, @Param('id') id: string, @Body() body) {
    return this.menuService.update(id, body, headers);
  }
}
