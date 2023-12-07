import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';

// import { MenuButtons } from '../menu-buttons/entities/menu-buttons.entity';
import { Role } from '../role/entities/role.entity';
import { User } from '../user/entities/user.entity';

import { MenuController } from './controllers/menu.controller';
import { Menu } from './entities/menu.entity';
import { MenuService } from './services/menu.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([Menu]),
        TypeOrmModule.forFeature([Role]),
        TypeOrmModule.forFeature([User]),
        // TypeOrmModule.forFeature([MenuButtons]),
    ],
    controllers: [MenuController],
    providers: [MenuService],
})
export class MenuModule {}
