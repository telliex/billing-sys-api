/**
 * @description: Request result set
 */
export enum ResultEnum {
    SUCCESS = 200,
    ERROR = -1,
    TIMEOUT = 401,
    TYPE = 'success',
}

/**
 * @description: Request result set
 */
export enum BillingResultEnum {
    SUCCESS = 1000,
    ERROR = 9999,
    TIMEOUT = 401,
}

/**
 * @description: request method
 */
export enum RequestEnum {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    PATCH = 'PATCH',
    DELETE = 'DELETE',
}

/**
 * @description:  contentType
 */
export enum ContentTypeEnum {
    // json
    JSON = 'application/json;charset=UTF-8',
    // form-data qs
    FORM_URLENCODED = 'application/x-www-form-urlencoded;charset=UTF-8',
    // form-data  upload
    FORM_DATA = 'multipart/form-data;charset=UTF-8',
}
