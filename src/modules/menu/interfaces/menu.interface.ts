export interface SnakeTypeMenuItem {
    id: string | null;
    type: string;
    menu_name: string;
    description: string;
    permission: string;
    component: string;
    component_name: string;
    route_path: string;
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
    routePath: string;
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

export interface MenuItem {
    readonly id: string;
    readonly type: string;
    readonly menuName: string;
    readonly alias: string;
    readonly description: string;
    readonly permission: string;
    readonly component: string;
    readonly componentName: string;
    readonly routePath: string;
    readonly orderNo: number;
    readonly icon: string;
    readonly parentMenu: string;
    readonly isExt: number;
    readonly isCache: number;
    readonly isShow: number;
    readonly status: number;
    readonly addMaster: number;
    readonly addTime: string;
    readonly changeMaster: number;
    readonly changeTime: string;
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
