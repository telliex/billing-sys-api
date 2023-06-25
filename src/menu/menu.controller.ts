/*
 * @Description:
 * @Anthor: Telliex
 * @Date: 2023-06-12 22:27:23
 * @LastEditors: Telliex.Chiu Telliex.Chiu@ecliudvalle.com.tw
 * @LastEditTime: 2023-06-24 06:57:25
 */
import { Controller, Get, Headers, Query, Post, Body, Patch, Param, Delete } from '@nestjs/common';

import { MenuDto } from './dto';
import { MenuService } from './menu.service';

interface FilterParam {
    menuName: string;
    status: number;
}
interface Header {
    'user-id': number;
    'time-zone': string;
}
// interface Body {
//     id: string;
//     type: string;
//     menuName: string;
//     description: string;
//     permission: string;
//     component: string;
//     componentName: string;
//     routPath: string;
//     orderNo: number;
//     icon: string;
//     parentMenu: string;
//     isExt: number;
//     isCache: number;
//     isShow: number;
//     status: number;
//     addMaster: number;
//     addTime: string;
//     changeMaster: number;
//     changeTime: string;
// }

@Controller('system/menu')
export class MenuController {
    constructor(private readonly menuService: MenuService) {}

    // constructor() {@InjectRepository(Menu) private readonly menuRepository: Repository<Menu>}
    // List the menu list
    @Get()
    async findAll(@Headers() headers: Header, @Query() filterParam: FilterParam) {
        // const { limit, offset } = paginationQuery;
        return this.menuService.findAll(headers, filterParam);
    }

    // Get the menu item
    @Get(':id')
    async findOne(@Headers() headers: Header, @Param('id') id: string) {
        // return `This is menu ${id} .`;
        return this.menuService.findOne(id, headers);
    }

    // Delete the menu item
    @Delete(':id')
    async remove(@Headers() headers: Header, @Param('id') id: string): Promise<MenuDto> {
        return this.menuService.remove(id, headers);
    }

    // // Create the menu item
    @Post()
    create(
        @Headers() headers: Header,
        @Body()
        createMenuDto: // new ValidationPipe({
        //     transform: true, // Serialize data
        //     forbidUnknownValues: true, // forbid all unknown values
        //     validationError: { target: false }, // ont only validate target error
        //     groups: ['create'],
        // }),
        MenuDto,
    ): Promise<MenuDto> {
        return this.menuService.create(createMenuDto, headers);
    }

    // cover the menu item
    @Patch(':id')
    update(
        @Headers() headers: Header,
        @Param('id') id: string,
        @Body()
        updateMenuDto: // new ValidationPipe({
        //     transform: true, // Serialize data
        //     forbidUnknownValues: true, // forbid  all unknown values
        //     validationError: { target: false }, // ont only validate target error
        //     groups: ['update'],
        // }),
        MenuDto,
    ): Promise<MenuDto> {
        return this.menuService.update(id, updateMenuDto, headers);
    }
}
