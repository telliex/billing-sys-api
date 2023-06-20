/*
 * @Description:
 * @Anthor: Telliex
 * @Date: 2023-06-12 22:27:23
 * @LastEditors: Telliex
 * @LastEditTime: 2023-06-20 14:15:32
 */
import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Patch,
  Headers,
  Body,
  Query,
} from '@nestjs/common';
import { MenuService } from './menu.service';
// import { CreateMenuDto, UpdateMenuDto } from './menu.dto';

interface FilterParam {
  menu_name: string;
  status: number;
}
interface Header {
  "user-id": number;
  "time-zone": string;
}
interface Body{
  id: string;
  type: string;
  menuName: string;
  description: string;
  permission: string;
  component: string;
  componentName: string;
  routPath: string;
  orderNo: number;
  icon: string;
  parentMenu: string;
  isExt: number;
  isCache: number;
  isShow: number;
  status: number;
  addMaster: number;
  addTime: string;
  changeMaster: number;
  changeTime: string;
}

@Controller('system/menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}
  // constructor() {@InjectRepository(Menu) private readonly menuRepository: Repository<Menu>}
  // List the menu list
  @Get()
  async findAlll(@Headers() headers: Header, @Query() filterParam: FilterParam) {
    // const { limit, offset } = paginationQuery;
    return await this.menuService.findAll(headers, filterParam);
  }
  // Get the menu item
  @Get(':id')
  async findOne(@Headers() headers: Header, @Param('id') id: string) {
    // return `This is menu ${id} .`;
    return await this.menuService.findOne(id, headers);
  }
  // Delete the menu item
  @Delete(':id')
  async remove(@Headers() headers: Header, @Param('id') id: string) {
    return await this.menuService.remove(id, headers);
  }
  // Create the menu item
  @Post()
  create(@Headers() headers :Header, @Body() body: Body) {
    return this.menuService.create(body, headers);
  }
  // cover the menu item
  @Patch(':id')
  update(@Headers() headers: Header, @Param('id') id: string, @Body() body: Body) {
    return this.menuService.update(id, body, headers);
  }
}
