export interface SnakeTypeUserItem {
    id: string | null;
    mgt_number: number;
    user_name: string;
    real_name: string;
    nickname: string;
    keyname: string;
    keypassword: string;
    token: string;
    remark: string;
    roles: any[];
    rolesString: string;
    dept: string;
    platform: string;
    company: string;
    status: number;
    last_active_time: string;
    add_master: number;
    add_master_name: string;
    add_time: string;
    change_master: number;
    change_master_name: string;
    change_time: string;
}

export interface CamelTypeUserItem {
    id: string | null;
    mgtNumber: number;
    userName: string;
    realName: string;
    nickname: string;
    keyname: string;
    keypassword: string;
    token: string;
    remark: string;
    roles: any[];
    rolesString: string;
    dept: string;
    platform: string;
    company: string;
    status: number;
    lastActiveTime: string;
    addMaster: number;
    addMasterName: string;
    addTime: string;
    changeMaster: number;
    changeMasterName: string;
    changeTime: string;
}

export interface User {
    readonly id: string;
    readonly mgtNumber: number;
    readonly userName: string;
    readonly realName: string;
    readonly nickname: string;
    readonly keyname: string;
    readonly keypassword: string;
    readonly token: string;
    readonly remark: string;
    readonly roles: any[];
    readonly rolesString: string;
    readonly dept: string;
    readonly platform: string;
    readonly company: string;
    readonly status: number;
    readonly lastActiveTime: string;
    readonly addMaster: number;
    readonly addMasterName: string;
    readonly addTime: string;
    readonly changeMaster: number;
    readonly changeMasterName: string;
    readonly changeTime: string;
}
