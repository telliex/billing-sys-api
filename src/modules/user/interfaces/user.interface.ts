export interface SnakeTypeUserItem {
    id: string | null;
    display_name: string;
    avatar: string;
    password: string;
    api_token: string;
    remark: string;
    status: number;
    add_master: string;
    add_time: string;
    change_master: string;
    change_time: string;
    last_active_time: string;
    hide: number;
    sex: number;
    birthday: string;
    tel: string;
    mobile: string;
    email: string;
    address: string;
    country: string;
    password_time: string;
}

export interface CamelTypeUserItem {
    id: string | null;
    displayName: string;
    avatar: string;
    password: string;
    apiToken: string;
    remark: string;
    status: number;
    addMaster: string;
    addTime: string;
    changeMaster: string;
    changeTime: string;
    lastActiveTime: string;
    hide: number;
    sex: number;
    birthday: string;
    tel: string;
    mobile: string;
    email: string;
    address: string;
    country: string;
    passwordTime: string;
}

export interface User {
    readonly id: string;
    readonly displayName: string;
    readonly avatar: string;
    readonly password: string;
    readonly apiToken: string;
    readonly remark: string;
    readonly status: number;
    readonly addMaster: string;
    readonly addTime: string;
    readonly changeMaster: string;
    readonly changeTime: string;
    readonly lastActiveTime: string;
    readonly hide: number;
    readonly sex: number;
    readonly birthday: string;
    readonly tel: string;
    readonly mobile: string;
    readonly email: string;
    readonly address: string;
    readonly country: string;
    readonly passwordTime: string;
}
