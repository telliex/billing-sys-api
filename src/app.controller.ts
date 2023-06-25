/*
 * @Author: Telliex.Chiu Telliex.Chiu@ecliudvalle.com.tw
 * @Date: 2023-06-20 22:51:07
 * @LastEditors: Telliex.Chiu Telliex.Chiu@ecliudvalle.com.tw
 * @LastEditTime: 2023-06-23 22:13:15
 * @FilePath: /billing-sys-api/src/app.controller.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
    @Get()
    @Render('index')
    getHello() {
        return { message: 'This is CBMS / CRS API , Welcome!' };
    }
}
