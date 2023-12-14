import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';

import { SettingProvider } from '@/config/setting.provider';

import { User } from '../user/entities/user.entity';

import { DepartmentController } from './controllers/department.controller';
import { Department } from './entities/department.entity';
import { DepartmentService } from './services/department.service';

@Module({
    imports: [TypeOrmModule.forFeature([Department]), TypeOrmModule.forFeature([User])],
    controllers: [DepartmentController],
    providers: [DepartmentService, SettingProvider],
})
export class DepartmentModule {}
