/*
 * @Description:
 * @Anthor: Telliex
 * @Date: 2023-06-12 22:47:41
 * @LastEditors: Telliex
 * @LastEditTime: 2023-06-15 22:01:00
 */
import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class InitMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log(Date());
    console.log('req', req.body);
    next();
  }
}
