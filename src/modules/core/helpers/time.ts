import dayjs from 'dayjs';

import 'dayjs/locale/en';
import 'dayjs/locale/zh-cn';
import 'dayjs/locale/zh-tw';

import advancedFormat from 'dayjs/plugin/advancedFormat';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import dayOfYear from 'dayjs/plugin/dayOfYear';
import localeData from 'dayjs/plugin/localeData';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

import { App } from '@/modules/core/app';

import { AppConfig, TimeOptions } from '../types';

dayjs.extend(localeData);
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(advancedFormat);
dayjs.extend(customParseFormat);
dayjs.extend(dayOfYear);

/**
 * 获取一个dayjs时间对象
 * @param options
 */
export const getTime = (options: TimeOptions = {}) => {
    const { date, format = 'YYYY-MM-DD HH:mm:ss', locale, strict = false, zonetime } = options;
    const config = App.configure.get<AppConfig>('app');
    // 每次创建一个新的时间对象
    // 如果没有传入local或timezone则使用应用配置
    const now = dayjs(date, { format, locale: locale ?? config.locale }, strict).clone();
    return now.tz(zonetime ?? config.timezone);
};
