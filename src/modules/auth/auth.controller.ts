import { Controller, Get, Headers, Query, Param, Post, Body, UseGuards} from '@nestjs/common';

import { HeaderParamDto } from '../restful/dto';

import { AuthService } from './auth.service';
import { AuthParam } from './interfaces/auth.interface';
import { JwtAuthGuard } from '../../common/jwt-auth.guard';

@Controller('api/v1.0/system/auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Get()
    requestToken(@Headers() headers: HeaderParamDto, @Query() param: AuthParam) {
        return this.authService.requestToken(param.mgtNumber, param.password);
    }

    @Get('logout')
    @UseGuards(JwtAuthGuard)
    logout(@Headers() headers: HeaderParamDto, @Param('id') id: string) {
        return this.authService.logout(id, headers);
    }

    @Post('login')
    async login(
        @Headers() headers: HeaderParamDto,
        @Body()
        body: any,
    ) {
        return this.authService.login(body, headers);
    }
}
