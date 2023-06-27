/**
 * 文章内容类型
 *
 * @export
 * @enum {number}
 */
export enum PostBodyType {
    HTML = 'html',
    MD = 'markdown',
}

/**
 * 文章排序类型
 */
export enum PostOrderType {
    CREATED = 'createdAt',
    UPDATED = 'updatedAt',
    PUBLISHED = 'publishedAt',
    COMMENTCOUNT = 'commentCount',
    CUSTOM = 'custom',
}

/**
 * 文章排序类型
 */
export enum MenuItemType {
  CATALOG = 'catalog',
  PAGE = 'page',
  BUTTON = 'button',
}