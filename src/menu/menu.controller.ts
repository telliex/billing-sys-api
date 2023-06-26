/*
 * @Description:
 * @Anthor: Telliex
 * @Date: 2023-06-12 22:27:23
 * @LastEditors: Telliex.chiu outsourcing_billing_1@ecloudvalley.com
 * @LastEditTime: 2023-06-26 15:55:51
 */
import { Controller, Get, Headers, Query, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe } from '@nestjs/common';

import { MenuDto, FilterParamDto, HeaderParamDto } from './dto';
import { MenuService } from './menu.service';

// interface FilterParam {
//     menuName: string;
//     status: number;
// }
// interface Header {
//     'user-id': number;
//     'time-zone': string;
// }

@Controller('system/menu')
export class MenuController {
    constructor(private readonly menuService: MenuService) {}

    // constructor() {@InjectRepository(Menu) private readonly menuRepository: Repository<Menu>}
    // List the menu list
    @Get()
    async findAll(@Headers() headers: HeaderParamDto, @Query() filterParam: FilterParamDto) {
        // const { limit, offset } = paginationQuery;
        return this.menuService.findAll(headers, filterParam);
    }

    @Get('list')
    async findList(@Headers() headers: HeaderParamDto, @Query() filterParam: FilterParamDto) {
        // const { limit, offset } = paginationQuery;
        return this.menuService.findList(headers, filterParam);
    }

    // Get the menu item
    @Get(':id')
    async findOne(@Headers() headers: HeaderParamDto, @Param('id') id: string) {
        // return `This is menu ${id} .`;
        return this.menuService.findOne(id, headers);
    }

    // Delete the menu item
    @Delete(':id')
    async remove(@Headers() headers: HeaderParamDto, @Param('id') id: string): Promise<MenuDto> {
        return this.menuService.remove(id, headers);
    }

    // // Create the menu item
    @Post()
    @UsePipes(
      new ValidationPipe({
        transform: true, // 將請求數據自動轉換為 DTO 對象
        whitelist: true, // 只保留 DTO 中定義的屬性
      }),
    )
    create(
        @Headers() headers: HeaderParamDto,
        @Body()
        createMenuDto: MenuDto,
    ): Promise<MenuDto> {
        return this.menuService.create(createMenuDto, headers);
    }

    // cover the menu item
    @Patch(':id')
    @UsePipes(
      new ValidationPipe({
        transform: true, // 將請求數據自動轉換為 DTO 對象
        whitelist: true, // 只保留 DTO 中定義的屬性
      }),
    )
    update(
        @Headers() headers: HeaderParamDto,
        @Param('id') id: string,
        @Body()
        updateMenuDto: MenuDto,
    ): Promise<MenuDto> {
        return this.menuService.update(id, updateMenuDto, headers);
    }
}
