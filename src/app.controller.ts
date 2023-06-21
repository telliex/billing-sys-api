import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Render('index')
  getHello() {
    return { message: 'This is CBMS / CRS API , Welcome!' };
  }
}
