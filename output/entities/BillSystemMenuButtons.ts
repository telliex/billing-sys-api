import { Column, Entity } from "typeorm";

@Entity("bill_system_menu_buttons", { schema: "ecloud_rick" })
export class BillSystemMenuButtons {
  @Column("varchar", { primary: true, name: "id", length: 36 })
  id: string;

  @Column("varchar", {
    name: "button_name",
    comment: "button name",
    length: 255,
  })
  buttonName: string;

  @Column("varchar", {
    name: "description",
    nullable: true,
    comment: "description",
    length: 255,
  })
  description: string | null;

  @Column("varchar", {
    name: "belong_menu",
    nullable: true,
    comment: "description",
    length: 255,
  })
  belongMenu: string | null;

  @Column("varchar", {
    name: "permission",
    nullable: true,
    comment: "permission",
    length: 255,
  })
  permission: string | null;

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
