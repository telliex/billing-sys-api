import { Controller, Get, Headers, Query } from '@nestjs/common';
import { AuthService } from './auth.service'
import { HeaderParamDto } from '../restful/dto';
import { AuthParam } from './interfaces/auth.interface'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService){}

  @Get()
  requestToken(@Headers() headers: HeaderParamDto, @Query() param: AuthParam){
    return this.authService.requestToken(param.mgtNumber, param.password);
  }
}
