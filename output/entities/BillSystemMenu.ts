import { Column, Entity } from "typeorm";

@Entity("bill_system_menu", { schema: "ecloud_rick" })
export class BillSystemMenu {
  @Column("varchar", { primary: true, name: "id", length: 36 })
  id: string;

  @Column("enum", {
    name: "type",
    comment: "menu type",
    enum: ["catalog", "page", "button"],
    default: () => "'page'",
  })
  type: "catalog" | "page" | "button";

  @Column("varchar", { name: "menu_name", comment: "menu name", length: 255 })
  menuName: string;

  @Column("varchar", { name: "alias", comment: "menu alias name", length: 255 })
  alias: string;

  @Column("varchar", {
    name: "description",
    nullable: true,
    comment: "description",
    length: 255,
  })
  description: string | null;

  @Column("varchar", {
    name: "permission",
    nullable: true,
    comment: "permission",
    length: 255,
  })
  permission: string | null;

  @Column("varchar", {
    name: "component",
    nullable: true,
    comment: "component",
    length: 255,
  })
  component: string | null;

  @Column("varchar", {
    name: "component_name",
    nullable: true,
    comment: "component name",
    length: 255,
  })
  componentName: string | null;

  @Column("varchar", {
    name: "route_path",
    nullable: true,
    comment: "path",
    length: 255,
  })
  routePath: string | null;

  @Column("int", {
    name: "order_no",
    comment: "order level",
    default: () => "'0'",
  })
  orderNo: number;

  @Column("varchar", {
    name: "icon",
    nullable: true,
    comment: "icon name",
    length: 255,
  })
  icon: string | null;

  @Column("varchar", {
    name: "parent_menu",
    comment: "parent menu id",
    length: 255,
  })
  parentMenu: string;

  @Column("tinyint", {
    name: "is_ext",
    comment: "if has ext-link",
    width: 1,
    default: () => "'0'",
  })
  isExt: boolean;

  @Column("tinyint", {
    name: "is_cache",
    comment: "if has cache",
    width: 1,
    default: () => "'0'",
  })
  isCache: boolean;

  @Column("tinyint", {
    name: "is_show",
    comment: "show",
    width: 1,
    default: () => "'0'",
  })
  isShow: boolean;

  @Column("tinyint", {
    name: "status",
    comment: "status",
    width: 1,
    default: () => "'0'",
  })
  status: boolean;

  @Column("varchar", {
    name: "menu_buttons",
    nullable: true,
    comment: "menu button groups",
    length: 255,
  })
  menuButtons: string | null;

  @Column("int", { name: "add_master", comment: "who added" })
  addMaster: number;

  @Column("varchar", {
    name: "add_master_name",
    comment: "who added by name",
    length: 255,
  })
  addMasterName: string;

  @Column("datetime", { name: "add_time" })
  addTime: Date;

  @Column("int", { name: "change_master", comment: "who changed by number" })
  changeMaster: number;

  @Column("varchar", {
    name: "change_master_name",
    comment: "who changed by name",
    length: 255,
  })
  changeMasterName: string;

  @Column("datetime", { name: "change_time" })
  changeTime: Date;
}
