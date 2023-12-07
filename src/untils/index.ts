import { ForbiddenException } from '@nestjs/common';
import moment from 'moment';

export const checkAndRenewToken = (lastActiveTime: Date, limitTime: number) => {
    // get target user's last active time to compare with current time
    // ===========
    // const targetUser = await this.userRepository.findOneBy({ id: user });
    let compareTime = moment('2021-01-01 00:00:00', 'YYYY-MM-DD HH:mm:ss');
    if (lastActiveTime) {
        compareTime = moment(lastActiveTime, 'YYYY-MM-DD HH:mm:ss');
    }
    const idleDuration = moment(moment.utc().format('YYYY-MM-DD HH:mm:ss')).diff(
        moment(compareTime),
        'minutes',
    );

    // If idle duration exceeds 3 hours, log the user out
    if (idleDuration >= limitTime) {
        throw new ForbiddenException('Token expired');
        return null;
        // Perform logout action, e.g., clear session
    }
    // targetUser.last_active_time = new Date(moment.utc().format('YYYY-MM-DD HH:mm:ss'));
    // await this.userRepository.save(targetUser);
    return new Date(moment.utc().format('YYYY-MM-DD HH:mm:ss'));
};
