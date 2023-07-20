export interface SnakeTypeRoleItem {
    id: string | null;
    parent_dept: string;
    dept_name: string;
    order_no: number;
    remark: string;
    status: number;
    add_master: number;
    add_time: string;
    change_master: number;
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
    addTime: string;
    changeMaster: number;
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
    readonly addTime: string;
    readonly changeMaster: number;
    readonly changeTime: string;
}
