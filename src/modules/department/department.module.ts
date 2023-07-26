import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from '../user/entities/user.entity';

import { DepartmentController } from './department.controller';
import { DepartmentService } from './department.service';
import { Department } from './entities/department.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Department]), TypeOrmModule.forFeature([User])],
    controllers: [DepartmentController],
    providers: [DepartmentService],
})
export class DepartmentModule {}
