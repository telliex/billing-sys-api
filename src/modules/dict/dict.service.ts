import { ForbiddenException, Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import moment from 'moment';

import { Repository } from 'typeorm';

import { checkHeaders } from '../restful/helpers';
import { User } from '../user/entities/user.entity';

import { CreateDictDto } from './dto';
import { DictDetail } from './entities/dict.detail.entity';
import { Dict } from './entities/dict.entity';
// import { CreateDictDto } from './dto/dict.dto';

@Injectable()
export class DictService {
    constructor(
        @InjectRepository(Dict)
        private dictRepository: Repository<Dict>,
        @InjectRepository(DictDetail)
        private dictDetailRepository: Repository<DictDetail>,
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) {}

    // create(createDictDto: CreateDictDto) {
    //     return 'This action adds a new dict';
    // }

    async findAll(query: any, headers: any) {
        checkHeaders(headers);
        const user = Number(headers['user-id']);
        // renew login time
        await this.checkAndRenewToken(user, 3 * 60);
        return this.dictRepository.find();
    }

    async findOne(dictName: string, headers: any) {
        checkHeaders(headers);
        const user = Number(headers['user-id']);
        // renew login time
        await this.checkAndRenewToken(user, 3 * 60);
        const targetDict = await this.dictRepository.findOneBy({ dict_Name: dictName });
        const targetDictDetail = await this.dictDetailRepository.find({ id: targetDict.id });
        return targetDictDetail;
    }

    update(id: number, updateDictDto: CreateDictDto) {
        return `This action updates a #${id} dict`;
    }

    // remove(id: number) {
    //     return `This action removes a #${id} dict`;
    // }

    async checkAndRenewToken(user: number, limitTime: number) {
        // get target user's last active time to compare with current time
        // ===========
        const targetUser = await this.userRepository.findOneBy({ mgt_number: user });

        const idleDuration = moment(moment.utc().format('YYYY-MM-DD HH:mm:ss')).diff(
            moment(targetUser.last_active_time),
            'minutes',
        );

        // If idle duration exceeds 3 hours, log the user out
        if (idleDuration >= limitTime) {
            throw new ForbiddenException('Token expired');
            // Perform logout action, e.g., clear session
        } else {
            targetUser.last_active_time = moment.utc().format('YYYY-MM-DD HH:mm:ss');
            await this.userRepository.save(targetUser);
        }
    }
}
