import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("bill_customer", ["billCustomer"], {})
@Entity("bill_customer_role", { schema: "ecloud_rick" })
export class BillCustomerRole {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "change_time", length: 10 })
  changeTime: string;

  @Column("int", { name: "change_customer" })
  changeCustomer: number;

  @Column("int", { name: "change_master" })
  changeMaster: number;

  @Column("varchar", { name: "add_time", length: 10 })
  addTime: string;

  @Column("int", { name: "add_master" })
  addMaster: number;

  @Column("int", { name: "bill_customer" })
  billCustomer: number;

  @Column("varchar", { name: "role_name", length: 20 })
  roleName: string;

  @Column("varchar", { name: "role_content", length: 60 })
  roleContent: string;

  @Column("char", { name: "hide", length: 1 })
  hide: string;
}
