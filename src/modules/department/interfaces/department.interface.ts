export interface SnakeTypeRoleItem {
    id: string | null;
    parent_dept: string;
    dept_name: string;
    order_no: number;
    remark: string;
    status: number;
    add_master: number;
    add_master_name: string;
    add_time: string;
    change_master: number;
    change_master_name: string;
    change_time: string;
}

export interface CamelTypeRoleItem {
    id: string | null;
    parentDept: string;
    deptName: string;
    orderNo: number;
    remark: string;
    status: number;
    addMaster: number;
    addMasterName: string;
    addTime: string;
    changeMaster: number;
    changeMasterName: string;
    changeTime: string;
}

export interface Role {
    readonly id: string;
    readonly parentDept: string;
    readonly deptName: string;
    readonly orderNo: number;
    readonly remark: string;
    readonly status: number;
    readonly addMaster: number;
    readonly addMasterName: string;
    readonly addTime: string;
    readonly changeMaster: number;
    readonly changeMasterName: string;
    readonly changeTime: string;
}
