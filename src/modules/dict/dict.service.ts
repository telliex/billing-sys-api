import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { isNil } from 'lodash';
import moment from 'moment';

import { Repository } from 'typeorm';

import { HeaderParamDto } from '../restful/dto';
import {
    camelCaseToSnakeCase,
    checkHeaders,
    offsetUtCTime,
    snakeCaseToCamelCase,
} from '../restful/helpers';
import { User } from '../user/entities/user.entity';

import { CreateDictDto } from './dto';
import { Dict } from './entities/dict.entity';
import { CamelTypeDictItem } from './interfaces/dict.interface';
// import { CreateDictDto } from './dto/dict.dto';

@Injectable()
export class DictService {
    constructor(
        @InjectRepository(Dict)
        private dictRepository: Repository<Dict>,
        // @InjectRepository(DictDetail)
        // private dictDetailRepository: Repository<DictDetail>,
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
        // const user = Number(headers['user-id']);
        // // renew login time
        // await this.checkAndRenewToken(user, 3 * 60);
        const targetDict = await this.dictRepository.findOneBy({ dict_name: dictName });
        // const targetDictDetail = await this.dictDetailRepository.findOneBy({
        //     dict_id: targetDict.id,
        // });
        return targetDict;
    }

    async update(dictName: string, createDictDto: CreateDictDto, headers: HeaderParamDto) {
        checkHeaders(headers);

        const user = Number(headers['user-id']);
        // renew login time
        await this.checkAndRenewToken(user, 3 * 60);

        const targetItem = await this.dictRepository.findOneBy({ dict_name: dictName });

        if (isNil(targetItem)) {
            throw new NotFoundException(`The dict #${dictName} is not found.`);
        }

        const updateItem = Object.assign(targetItem, camelCaseToSnakeCase(createDictDto));
        const target = await this.userRepository.findOneBy({ mgt_number: user });

        updateItem.change_master = user;
        updateItem.change_time = moment.utc().format('YYYY-MM-DD HH:mm:ss');
        updateItem.change_master_name = target.user_name;
        const output = snakeCaseToCamelCase(
            await this.dictRepository.save(updateItem),
        ) as CamelTypeDictItem;
        output.changeTime = output.changeTime
            ? offsetUtCTime(output.changeTime, headers['time-zone'])
            : '';
        output.addTime = output.addTime ? offsetUtCTime(output.addTime, headers['time-zone']) : '';
        return [output];
    }

    // remove(id: number) {
    //     return `This action removes a #${id} dict`;
    // }

    async checkAndRenewToken(user: number, limitTime: number) {
        // get target user's last active time to compare with current time
        // ===========
        const targetUser = await this.userRepository.findOneBy({ mgt_number: user });
        let compareTime = '2021-01-01 00:00:00';
        if (targetUser) {
            compareTime = targetUser.last_active_time;
        }
        const idleDuration = moment(moment.utc().format('YYYY-MM-DD HH:mm:ss')).diff(
            moment(compareTime),
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
