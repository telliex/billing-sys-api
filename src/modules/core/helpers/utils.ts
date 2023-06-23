import {isNil} from 'lodash';
/**
 * 用於請求驗證中的boolean數據轉義
 * @param value
 */
export function toBoolean(value?: string | boolean): boolean {
  if (isNil(value)) return false;
  if (typeof value === 'boolean') return value;
  try {
      return JSON.parse(value.toLowerCase());
  } catch (error) {
      return value as unknown as boolean;
  }
}

/**
* 用於請求驗證中轉義null
* @param value
*/
export function toNull(value?: string | null): string | null | undefined {
  return value === 'null' ? null : value;
}
