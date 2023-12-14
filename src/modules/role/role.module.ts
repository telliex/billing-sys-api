import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';

import { SettingProvider } from '@/config/setting.provider';

import { Dict } from '../dict/entities/dict.entity';
import { MenuRoleMapping } from '../menu/entities/menu.role.mapping.entity';
import { User } from '../user/entities/user.entity';

import { RoleController } from './controllers/role.controller';
import { Role } from './entities/role.entity';
import { RoleService } from './services/role.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([Role]),
        TypeOrmModule.forFeature([User]),
        TypeOrmModule.forFeature([Dict]),
        TypeOrmModule.forFeature([MenuRoleMapping]),
    ],
    controllers: [RoleController],
    providers: [RoleService, SettingProvider],
})
export class RoleModule {}
