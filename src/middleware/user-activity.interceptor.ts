// user-activity.interceptor.ts
import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable, from } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Repository } from 'typeorm';

import { SettingProvider } from '@/config/setting.provider';
import { User } from '@/modules/user/entities/user.entity';
import { checkAndRenewToken } from '@/untils';

@Injectable()
export class UserActivityInterceptor implements NestInterceptor {
    constructor(
        private userRepository: Repository<User>,
        private readonly settingProvider: SettingProvider,
    ) {}

    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const request = context.switchToHttp().getRequest();
        const userId = String(request.headers['user-id']);

        if (!userId) {
            return next.handle();
        }

        // 將異步操作轉換為 Observable
        return from(this.updateUserActivity(userId)).pipe(switchMap(() => next.handle()));
    }

    private async updateUserActivity(userId: string): Promise<void> {
        const targetUser = await this.userRepository.findOneBy({ id: userId });
        if (targetUser) {
            const writeTime = checkAndRenewToken(
                targetUser.last_active_time,
                this.settingProvider.logoutTime,
            );

            targetUser.last_active_time = writeTime ? new Date(writeTime) : null;
            await this.userRepository.save(targetUser);
        }
    }
}
