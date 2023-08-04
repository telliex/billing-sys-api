// auth.service.ts

import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async requestToken(mgtNumber: number, password: string): Promise<any>{
    return this.validateUser(mgtNumber,password)
  }
  async validateUser(mgtNumber: number, password: string): Promise<any> {
    const user = await this.userService.findUserByMGTId(mgtNumber);
    console.log('user9999999:', user)
    if (user && await this.userService.comparePasswords(password, user.password)) {
      // 密碼驗證成功，生成 JWT
      const payload = { mgtNumber: user.mgt_number, sub: user.id };
      const accessToken = this.jwtService.sign(payload, { expiresIn: '3h' }); // 設定 JWT 的過期時間為 3 小時
      return { access_token: accessToken };
    }
    // 密碼驗證失敗，返回 null
    return null;
  }

  async validateUserFromJwt(payload: any): Promise<any> {
    // 在這裡您可以使用 payload 中的用戶資訊來查詢用戶或進行其他額外處理
    const user = await this.userService.findUserById(payload.sub);
    if (!user) {
      // 如果找不到用戶，可能該用戶已被刪除或無效，則回傳 null 表示驗證失敗
      return null;
    }
    // 驗證成功，回傳用戶資訊
    return user;
  }
}
