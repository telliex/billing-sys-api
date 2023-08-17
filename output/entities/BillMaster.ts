import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("change_master", ["changeMaster"], {})
@Entity("bill_master", { schema: "ecloud_rick" })
export class BillMaster {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "change_time", length: 10 })
  changeTime: string;

  @Column("int", { name: "change_master", default: () => "'0'" })
  changeMaster: number;

  @Column("varchar", { name: "add_time", length: 10 })
  addTime: string;

  @Column("int", { name: "add_master", default: () => "'0'" })
  addMaster: number;

  @Column("varchar", { name: "keyname", length: 50 })
  keyname: string;

  @Column("varchar", { name: "keypassword", length: 80 })
  keypassword: string;

  @Column("varchar", { name: "keypassword_time", length: 10 })
  keypasswordTime: string;

  @Column("varchar", { name: "family", length: 100 })
  family: string;

  @Column("varchar", { name: "title", length: 100 })
  title: string;

  @Column("varchar", { name: "sap_emp_no", length: 6, default: () => "'0'" })
  sapEmpNo: string;

  @Column("varchar", { name: "name", nullable: true, length: 100 })
  name: string | null;

  @Column("char", { name: "sex", length: 1 })
  sex: string;

  @Column("date", { name: "birthday", default: () => "'0000-00-00'" })
  birthday: string;

  @Column("varchar", { name: "tel", length: 20 })
  tel: string;

  @Column("varchar", { name: "mobile", length: 20 })
  mobile: string;

  @Column("varchar", { name: "email", length: 50 })
  email: string;

  @Column("text", { name: "address" })
  address: string;

  @Column("varchar", { name: "country", length: 3 })
  country: string;

  @Column("text", { name: "memo" })
  memo: string;

  @Column("char", { name: "leave", length: 1, default: () => "'n'" })
  leave: string;

  @Column("char", { name: "hide", length: 1, default: () => "'n'" })
  hide: string;

  @Column("varchar", { name: "role_id", length: 45, default: () => "'0'" })
  roleId: string;
}
