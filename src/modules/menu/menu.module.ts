import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';

// import { MenuButtons } from '../menu-buttons/entities/menu-buttons.entity';
import { SettingProvider } from '@/config/setting.provider';

import { Role } from '../role/entities/role.entity';
import { User } from '../user/entities/user.entity';

import { UserRoleMapping } from '../user/entities/user.role.mapping.entity';

import { MenuController } from './controllers/menu.controller';
import { Menu } from './entities/menu.entity';
import { MenuService } from './services/menu.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([Menu]),
        TypeOrmModule.forFeature([Role]),
        TypeOrmModule.forFeature([User]),
        TypeOrmModule.forFeature([UserRoleMapping]),
        // TypeOrmModule.forFeature([MenuButtons]),
    ],
    controllers: [MenuController],
    providers: [MenuService, SettingProvider],
})
export class MenuModule {}
