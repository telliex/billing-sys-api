export interface SnakeTypeDictItem {
    id: string | null;
    dict_name: string;
    dict_value: string;
    remark: string;
    status: number;
    add_master: number;
    add_master_name: string;
    add_time: string;
    change_master: number;
    change_master_name: string;
    change_time: string;
}

export interface CamelTypeDictItem {
    id: string | null;
    dictName: string;
    dictValue: string;
    remark: string;
    status: number;
    addMaster: number;
    addMasterName: string;
    addTime: string;
    changeMaster: number;
    changeMasterName: string;
    changeTime: string;
}

export interface Dict {
    readonly id: string;
    readonly dictName: string;
    readonly dictValue: string;
    readonly remark: string;
    readonly status: number;
    readonly addMaster: number;
    readonly addMasterName: string;
    readonly addTime: string;
    readonly changeMaster: number;
    readonly changeMasterName: string;
    readonly changeTime: string;
}
