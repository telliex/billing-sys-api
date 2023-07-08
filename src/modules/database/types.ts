// src/modules/database/types.ts

import { ObjectLiteral, SelectQueryBuilder } from 'typeorm';

export type QueryHook<Entity> = (
    qb: SelectQueryBuilder<Entity>,
) => Promise<SelectQueryBuilder<Entity>>;

/**
 * 分頁原數據
 */
export interface PaginateMeta {
    /**
     * 當前頁項目數量
     */
    itemCount: number;
    /**
     * 項目總數量
     */
    totalItems?: number;
    /**
     * 每頁顯示數量
     */
    perPage: number;
    /**
     * 總頁數
     */
    totalPages?: number;
    /**
     * 當前頁數
     */
    currentPage: number;
}
/**
 * 分頁選項
 */
export interface PaginateOptions {
    /**
     * 當前頁數
     */
    page: number;
    /**
     * 每頁顯示數量
     */
    limit: number;
}

/**
 * 分頁返回數據
 */
export interface PaginateReturn<E extends ObjectLiteral> {
    meta: PaginateMeta;
    items: E[];
}
