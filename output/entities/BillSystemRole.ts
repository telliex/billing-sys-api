import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { BillSystemUser } from "./BillSystemUser";

@Entity("bill_system_role", { schema: "ecloud_rick" })
export class BillSystemRole {
  @Column("varchar", { primary: true, name: "id", length: 36 })
  id: string;

  @Column("varchar", { name: "role_name", comment: "role name", length: 255 })
  roleName: string;

  @Column("varchar", { name: "role_value", comment: "role value", length: 255 })
  roleValue: string;

  @Column("varchar", {
    name: "remark",
    nullable: true,
    comment: "remark",
    length: 255,
  })
  remark: string | null;

  @Column("int", {
    name: "order_no",
    comment: "order level",
    default: () => "'0'",
  })
  orderNo: number;

  @Column("tinyint", {
    name: "status",
    comment: "status",
    default: () => "'0'",
  })
  status: number;

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

  @Column("int", { name: "change_master", comment: "who changed" })
  changeMaster: number;

  @Column("varchar", {
    name: "change_master_name",
    comment: "who changed by name",
    length: 255,
  })
  changeMasterName: string;

  @Column("datetime", { name: "change_time" })
  changeTime: Date;

  @Column("text", {
    name: "menu_permission",
    nullable: true,
    comment: "menu permission",
  })
  menuPermission: string | null;

  @ManyToOne(
    () => BillSystemUser,
    (billSystemUser) => billSystemUser.billSystemRoles,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([{ name: "userId", referencedColumnName: "id" }])
  user: BillSystemUser;
}
