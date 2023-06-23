/*
 * @Description:
 * @Anthor: Telliex
 * @Date: 2023-06-12 22:27:23
 * @LastEditors: Telliex.chiu outsourcing_billing_1@ecloudvalley.com
 * @LastEditTime: 2023-06-22 09:48:42
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
  ParseIntPipe,
  ValidationPipe,
} from '@nestjs/common';
import { MenuService } from './menu.service';
import { CreateMenuDto, UpdateMenuDto } from './dto';
import { Menu } from './interfaces/menu.interface';

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
  async findAlll(@Headers() headers: Header, @Query() filterParam: FilterParam): Promise<Menu[]>  {
    // const { limit, offset } = paginationQuery;
    return await this.menuService.findAll(headers, filterParam);
  }
  // Get the menu item
  @Get(':id')
  async findOne(@Headers() headers: Header, @Param('id',new ParseIntPipe()) id: string) : Promise<Menu> {
    // return `This is menu ${id} .`;
    return await this.menuService.findOne(id, headers);
  }
  // Delete the menu item
  @Delete(':id')
  async remove(@Headers() headers: Header, @Param('id') id: string): Promise<Menu>  {
    return await this.menuService.remove(id, headers);
  }
  // Create the menu item
  @Post()
  create(
    @Headers() headers :Header,
    @Body( new ValidationPipe({
      transform: true, // Serialize data
      forbidUnknownValues: true, // forbid all unknown values
      validationError:{ target: false},  // ont only validate target error
      groups:['create']
    })) createMenuDto: CreateMenuDto,
  ): Promise<Menu>  {
    return this.menuService.create(createMenuDto, headers);
  }
  // cover the menu item
  @Patch(':id')
  update(
    @Headers() headers: Header,
    @Param('id',new ParseIntPipe()) id: string,
    @Body( new ValidationPipe({
      transform: true, // Serialize data
      forbidUnknownValues: true, // forbid  all unknown values
      validationError:{ target: false}, // ont only validate target error
      groups:['update']
    })) updateMenuDto: UpdateMenuDto
  ): Promise<Menu> {
    return this.menuService.update(id, updateMenuDto, headers);
  }
}
