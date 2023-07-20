export interface SnakeTypeUserItem {
    id: string | null;
    user_name: string;
    real_name: string;
    nickname: string;
    email: string;
    remark: string;
    roles: string;
    status: number;
    add_master: number;
    add_time: string;
    change_master: number;
    change_time: string;
}

export interface CamelTypeUserItem {
    id: string | null;
    userName: string;
    realName: string;
    nickname: string;
    email: string;
    remark: string;
    roles: string;
    status: number;
    addMaster: number;
    addTime: string;
    changeMaster: number;
    changeTime: string;
}

export interface User {
    readonly id: string;
    readonly userName: string;
    readonly realName: string;
    readonly nickname: string;
    readonly email: string;
    readonly remark: string;
    readonly roles: string;
    readonly status: number;
    readonly addMaster: number;
    readonly addTime: string;
    readonly changeMaster: number;
    readonly changeTime: string;
}
