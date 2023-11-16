export interface SnakeTypeMenuItem {
    id: string | null;
    type: number;
    menu_name: string;
    description: string;
    permission: string;
    component: string;
    component_name: string;
    route_path: string;
    sort_no: number;
    icon: string;
    parent_menu: string;
    is_ext: number;
    // is_cache: number;
    // cache_name: string;
    // is_show: number;
    status: number;
    // menu_buttons: string;
    add_master: number;
    // add_master_name: string;
    add_time: string;
    change_master: number;
    // change_master_name: string;
    change_time: string;
}

export interface CamelTypeMenuItem {
    id: string;
    type: number;
    menuName: string;
    // alias: string;
    description: string;
    permission: string;
    component: string;
    componentName: string;
    routePath: string;
    sortNo: number;
    icon: string;
    parentMenu: string;
    isExt: number;
    // isCache: number;
    // cacheName: string;
    // isShow: number;
    status: number;
    // menuButtons: string;
    addMaster: number;
    // addMasterName: string;
    addTime: string;
    changeMaster: number;
    // changeMasterName: string;
    changeTime: string;
}

export interface MenuItem {
    readonly id: string;
    readonly type: string;
    readonly menuName: string;
    // readonly alias: string;
    readonly description: string;
    readonly permission: string;
    readonly component: string;
    readonly componentName: string;
    readonly routePath: string;
    readonly sortNo: number;
    readonly icon: string;
    readonly parentMenu: string;
    readonly isExt: number;
    // readonly isCache: number;
    // readonly cacheName: string;
    // readonly isShow: number;
    readonly status: number;
    // readonly menuButtons: string;
    readonly addMaster: number;
    // readonly addMasterName: string;
    readonly addTime: string;
    readonly changeMaster: number;
    // readonly changeMasterName: string;
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
