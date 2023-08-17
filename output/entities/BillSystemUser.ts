import { Column, Entity, OneToMany } from "typeorm";
import { BillSystemRole } from "./BillSystemRole";

@Entity("bill_system_user", { schema: "ecloud_rick" })
export class BillSystemUser {
  @Column("varchar", { primary: true, name: "id", length: 36 })
  id: string;

  @Column("int", { name: "mgt_number", comment: "MGT number" })
  mgtNumber: number;

  @Column("varchar", { name: "user_name", comment: "user name", length: 255 })
  userName: string;

  @Column("varchar", { name: "real_name", comment: "real name", length: 255 })
  realName: string;

  @Column("varchar", { name: "nickname", comment: "nickname", length: 255 })
  nickname: string;

  @Column("varchar", { name: "email", comment: "Email", length: 255 })
  email: string;

  @Column("varchar", {
    name: "avatar",
    nullable: true,
    comment: "avatar",
    length: 255,
  })
  avatar: string | null;

  @Column("varchar", {
    name: "remark",
    nullable: true,
    comment: "remark",
    length: 255,
  })
  remark: string | null;

  @Column("varchar", { name: "password", comment: "password", length: 255 })
  password: string;

  @Column("varchar", { name: "token", comment: "token", length: 255 })
  token: string;

  @Column("varchar", { name: "dept", comment: "dept", length: 255 })
  dept: string;

  @Column("varchar", {
    name: "system",
    comment: "dept",
    length: 255,
    default: () => "'CRS'",
  })
  system: string;

  @Column("varchar", {
    name: "home_path",
    nullable: true,
    comment: "homePath",
    length: 255,
  })
  homePath: string | null;

  @Column("tinyint", {
    name: "status",
    comment: "status",
    width: 1,
    default: () => "'0'",
  })
  status: boolean;

  @Column("tinyint", {
    name: "isRemoved",
    comment: "if removed",
    width: 1,
    default: () => "'0'",
  })
  isRemoved: boolean;

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

  @Column("varchar", {
    name: "roles_string",
    comment: "role string",
    length: 10000,
  })
  rolesString: string;

  @Column("varchar", {
    name: "company",
    comment: "dept",
    length: 255,
    default: () => "'ECloudValley'",
  })
  company: string;

  @OneToMany(() => BillSystemRole, (billSystemRole) => billSystemRole.user)
  billSystemRoles: BillSystemRole[];
}
