import { Column, Entity } from "typeorm";

@Entity("bill_system_department", { schema: "ecloud_rick" })
export class BillSystemDepartment {
  @Column("varchar", { primary: true, name: "id", length: 36 })
  id: string;

  @Column("varchar", {
    name: "parent_dept",
    comment: "parent dept id",
    length: 255,
  })
  parentDept: string;

  @Column("varchar", { name: "dept_name", comment: "dept name", length: 255 })
  deptName: string;

  @Column("int", {
    name: "order_no",
    comment: "order level",
    default: () => "'0'",
  })
  orderNo: number;

  @Column("varchar", {
    name: "remark",
    nullable: true,
    comment: "remark",
    length: 255,
  })
  remark: string | null;

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
}
