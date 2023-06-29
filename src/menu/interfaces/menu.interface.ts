export interface SnakeTypeMenuItem {
    id: string | null;
    type: string;
    menu_name: string;
    description: string;
    permission: string;
    component: string;
    component_name: string;
    rout_path: string;
    order_no: number;
    icon: string;
    parent_menu: string;
    is_ext: number;
    is_cache: number;
    is_show: number;
    status: number;
    add_master: number;
    add_time: string;
    change_master: number;
    change_time: string;
}

export interface CamelTypeMenuItem {
    id: string;
    type: string;
    menuName: string;
    alias: string;
    description: string;
    permission: string;
    component: string;
    componentName: string;
    routPath: string;
    orderNo: number;
    icon: string;
    parentMenu: string;
    isExt: number;
    isCache: number;
    isShow: number;
    status: number;
    addMaster: number;
    addTime: string;
    changeMaster: number;
    changeTime: string;
}

export interface Menu {
    id: string;
    type: string;
    menuName: string;
    alias: string;
    description: string;
    permission: string;
    component: string;
    componentName: string;
    routPath: string;
    orderNo: number;
    icon: string;
    parentMenu: string;
    isExt: number;
    isCache: number;
    isShow: number;
    status: number;
    addMaster: number;
    addTime: string;
    changeMaster: number;
    changeTime: string;
}

export interface MetaItem {
    title?: string;
    hideChildrenInMenu?: boolean;
    icon?: string;
    currentActiveMenu?: string;
    hideBreadcrumb?: boolean;
    hideMenu?: boolean;
}

export interface NavItem {
    path?: string;
    name?: string;
    component?: string;
    redirect?: string;
    meta?: MetaItem;
    children?: NavItem[];
}
