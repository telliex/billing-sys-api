import { Injectable, NotFoundException } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { isNil } from 'lodash';
import moment from 'moment';

import { Repository } from 'typeorm';

import { SettingProvider } from '@/config/setting.provider';
import { checkAndRenewToken } from '@/untils';

import { HeaderParamDto } from '../../restful/dto';
import {
    camelCaseToSnakeCase,
    checkHeaders,
    offsetUtCTime,
    snakeCaseToCamelCase,
} from '../../restful/helpers';
import { User } from '../../user/entities/user.entity';

import { DictDto } from '../dto';
import { Dict } from '../entities/dict.entity';
import { CamelTypeDictItem } from '../interfaces/dict.interface';
// import { DictDto } from './dto/dict.dto';

@Injectable()
export class DictService {
    constructor(
        @InjectRepository(Dict)
        private dictRepository: Repository<Dict>,
        // @InjectRepository(DictDetail)
        // private dictDetailRepository: Repository<DictDetail>,
        @InjectRepository(User)
        private userRepository: Repository<User>,
        private readonly settingProvider: SettingProvider,
    ) {}

    // create(createDictDto: DictDto) {
    //     return 'This action adds a new dict';
    // }

    async findAll(query: any, headers: any) {
        checkHeaders(headers);
        const userId = String(headers['user-id']);
        // renew login time
        const targetUser = await this.userRepository.findOneBy({ id: userId });
        let writeTime = null;
        if (targetUser) {
            writeTime = checkAndRenewToken(
                targetUser.last_active_time,
                this.settingProvider.logoutTime,
            );
        }
        targetUser.last_active_time = writeTime ? new Date(writeTime) : null;
        await this.userRepository.save(targetUser);

        return this.dictRepository.find();
    }

    async findOne(dictName: string, headers: any) {
        checkHeaders(headers);
        // const user = String(headers['user-id']);
        // // renew login time
        // await this.checkAndRenewToken(user, 3 * 60);
        const targetDict = await this.dictRepository.findOneBy({ dict_name: dictName });
        // const targetDictDetail = await this.dictDetailRepository.findOneBy({
        //     dict_id: targetDict.id,
        // });
        return targetDict;
    }

    async update(dictName: string, createDictDto: DictDto, headers: HeaderParamDto) {
        checkHeaders(headers);

        const userId = String(headers['user-id']);
        // renew login time
        const targetUser = await this.userRepository.findOneBy({ id: userId });
        let writeTime = null;
        if (targetUser) {
            writeTime = checkAndRenewToken(
                targetUser.last_active_time,
                this.settingProvider.logoutTime,
            );
        }
        targetUser.last_active_time = writeTime ? new Date(writeTime) : null;
        await this.userRepository.save(targetUser);

        const targetItem = await this.dictRepository.findOneBy({ dict_name: dictName });

        if (isNil(targetItem)) {
            throw new NotFoundException(`The dict #${dictName} is not found.`);
        }

        const updateItem = Object.assign(targetItem, camelCaseToSnakeCase(createDictDto));

        updateItem.change_master = userId;
        updateItem.change_time = new Date(moment.utc().format('YYYY-MM-DD HH:mm:ss'));
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
}
