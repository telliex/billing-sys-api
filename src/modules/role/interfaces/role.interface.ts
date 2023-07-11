export interface SnakeTypeRoleItem {
    id: string | null;
    role_name: string;
    role_value: string;
    remark: string;
    menu_permission: string;
    order_no: number;
    status: number;
    add_master: number;
    add_time: string;
    change_master: number;
    change_time: string;
}

export interface CamelTypeRoleItem {
    id: string | null;
    roleName: string;
    roleValue: string;
    remark: string;
    menuPermission: string;
    orderNo: number;
    status: number;
    addMaster: number;
    addTime: string;
    changeMaster: number;
    changeTime: string;
}

export interface Role {
    readonly id: string;
    readonly roleName: string;
    readonly roleValue: string;
    readonly remark: string;
    readonly menuPermission: string;
    readonly orderNo: number;
    readonly status: number;
    readonly addMaster: number;
    readonly addTime: string;
    readonly changeMaster: number;
    readonly changeTime: string;
}
