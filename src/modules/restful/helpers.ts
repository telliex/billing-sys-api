import { BadRequestException } from '@nestjs/common';
import { Guid } from 'js-guid';
import { camelCase, snakeCase } from 'lodash';
import moment from 'moment';

import { ResultEnum, BillingResultEnum } from '../../enums/httpEnum';

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

// TODO
export function resultError(
    msg = 'Request failed',
    { code = ResultEnum.ERROR, status = BillingResultEnum.ERROR, results = 1 } = {},
) {
    return {
        trace_id: Guid.newGuid().toString(),
        code,
        status,
        results: results || null,
        msg,
        type: 'error',
        requested_time: '',
        responsed_time: '',
    };
}

// <T = Recordable>
export function resultSuccess<T = any>(results: T, { msg = 'ok' } = {}) {
    return {
        trace_id: Guid.newGuid().toString(), // add by Telliex
        code: ResultEnum.SUCCESS,
        status: BillingResultEnum.SUCCESS, // add by Telliex
        results,
        msg, // add by Telliex
        type: 'success',
        requested_time: '',
        responsed_time: '',
    };
}

export function resultPageSuccess<T = any>(
    page: number,
    pageSize: number,
    list: T[],
    { msg = 'ok' } = {},
) {
    const pageData = pagination(page, pageSize, list);

    return {
        ...resultSuccess({
            items: pageData,
            total: list.length,
        }),
        msg,
    };
}

export function pagination<T = any>(pageNo: number, pageSize: number, array: T[]): T[] {
    const offset = (pageNo - 1) * Number(pageSize);
    return offset + Number(pageSize) >= array.length
        ? array.slice(offset, array.length)
        : array.slice(offset, offset + Number(pageSize));
}

export interface RequestParams {
    // method: string;
    // body: any;
    // headers?: { authorization?: string; 'user-id': number; 'time-zone': string };
    // query: any;
    'user-id': number;
    'time-zone': string;
    authorization?: string;
}

/**
 * @description 本函数用于从request数据中获取token，请根据项目的实际情况修改
 *
 */
export function getRequestToken(headers: RequestParams): string | undefined {
    return headers?.authorization;
}
