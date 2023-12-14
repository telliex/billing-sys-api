import { Module } from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SettingProvider } from '@/config/setting.provider';

import { UserController } from './controllers/user.controller';
import { User } from './entities/user.entity';
import { UserRoleMapping } from './entities/user.role.mapping.entity';

import { UserService } from './services/user.service';

@Module({
    imports: [TypeOrmModule.forFeature([User]), TypeOrmModule.forFeature([UserRoleMapping])],
    controllers: [UserController],
    providers: [UserService, JwtService, SettingProvider],
})
export class UserModule {}
