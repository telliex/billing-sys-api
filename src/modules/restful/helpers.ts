import { BadRequestException } from '@nestjs/common';
import { camelCase, snakeCase } from 'lodash';
import moment from 'moment';

export function camelCaseToSnakeCase<T, S>(importObj: T): S {
    return Object.keys(importObj).reduce((acc, key) => {
        const wantKey = snakeCase(key) as keyof S;
        // @ts-ignore
        acc[wantKey] = importObj[key] as S[keyof S];
        return acc;
    }, {} as S);
}

export function snakeCaseToCamelCase<T, S>(importObj: T): S {
    return Object.keys(importObj).reduce((acc, key) => {
        const wantKey = camelCase(key) as keyof S;
        // @ts-ignore
        acc[wantKey] = importObj[key] as S[keyof S];
        return acc;
    }, {} as S);
}

export function offsetUtCTime(time: string, timeZone: string) {
    const offsetTime = Number(timeZone.split('UTC')[1]);
    return moment(time).add(offsetTime, 'hours').format('YYYY-MM-DD HH:mm:ss');
}

export function checkHeaders(headers: any) {
    if (!headers['time-zone']) {
        throw new BadRequestException(`Missing UTC header.`);
    }
    if (!headers['user-id']) {
        throw new BadRequestException(`Missing user id header.`);
    }
}
