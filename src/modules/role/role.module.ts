import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';

import { Dict } from '../dict/entities/dict.entity';
import { User } from '../user/entities/user.entity';

import { Role } from './entities/role.entity';
import { RoleController } from './role.controller';
import { RoleService } from './role.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([Role]),
        TypeOrmModule.forFeature([User]),
        TypeOrmModule.forFeature([Dict]),
    ],
    controllers: [RoleController],
    providers: [RoleService],
})
export class RoleModule {}
