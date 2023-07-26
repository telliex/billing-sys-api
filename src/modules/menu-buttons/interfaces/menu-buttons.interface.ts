export interface SnakeTypeMenuButtonItem {
    id: string | null;
    button_name: string;
    description: string;
    belong_Menu: string;
    permission: string;
    is_show: number;
    status: number;
    add_master: number;
    add_master_name: string;
    add_time: string;
    change_master: number;
    change_master_name: string;
    change_time: string;
}

export interface CamelTypeMenuButtonItem {
    id: string;
    buttonName: string;
    description: string;
    belongMenu: string;
    permission: string;
    isShow: number;
    status: number;
    addMaster: number;
    addMasterName: string;
    addTime: string;
    changeMaster: number;
    changeMasterName: string;
    changeTime: string;
}

export interface MenuButtonItem {
    readonly id: string;
    readonly buttonName: string;
    readonly description: string;
    readonly belongMenu: string;
    readonly permission: string;
    readonly isShow: number;
    readonly status: number;
    readonly addMaster: number;
    readonly addMasterName: string;
    readonly addTime: string;
    readonly changeMaster: number;
    readonly changeMasterName: string;
    readonly changeTime: string;
}
