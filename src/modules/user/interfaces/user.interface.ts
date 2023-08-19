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
    system: string;
    company: string;
    status: number;
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
    system: string;
    company: string;
    status: number;
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
    readonly system: string;
    readonly company: string;
    readonly status: number;
    readonly addMaster: number;
    readonly addMasterName: string;
    readonly addTime: string;
    readonly changeMaster: number;
    readonly changeMasterName: string;
    readonly changeTime: string;
}
