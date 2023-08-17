import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("dept_mapping_transfer", { schema: "ecloud_rick" })
export class DeptMappingTransfer {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "add_time", length: 10 })
  addTime: string;

  @Column("int", { name: "add_master" })
  addMaster: number;

  @Column("varchar", { name: "change_time", length: 10 })
  changeTime: string;

  @Column("int", { name: "change_master" })
  changeMaster: number;

  @Column("varchar", {
    name: "r_dept_id",
    nullable: true,
    comment: "Code id",
    length: 30,
  })
  rDeptId: string | null;

  @Column("varchar", {
    name: "v_dept_id",
    nullable: true,
    comment: "Code id",
    length: 30,
  })
  vDeptId: string | null;

  @Column("int", { name: "discount_num" })
  discountNum: number;

  @Column("char", { name: "hide", length: 1, default: () => "'n'" })
  hide: string;
}
