import { Controller, Get, Headers, Query, Post, Body } from '@nestjs/common';

import { HeaderParamDto } from '../restful/dto';

import { AuthService } from './auth.service';
import { AuthParam } from './interfaces/auth.interface';

@Controller('api/v1.0/auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Get()
    requestToken(@Headers() headers: HeaderParamDto, @Query() param: AuthParam) {
        return this.authService.requestToken(param.mgtNumber, param.password);
    }

    @Get('logout')
    logout(@Headers() headers: HeaderParamDto) {
        return this.authService.logout(headers);
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
