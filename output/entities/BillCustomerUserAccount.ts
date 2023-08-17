import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("bill_customer_user_account", { schema: "ecloud_rick" })
export class BillCustomerUserAccount {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "bill_customer_user" })
  billCustomerUser: number;

  @Column("int", { name: "bill_customer" })
  billCustomer: number;

  @Column("varchar", { name: "role_ids", length: 255 })
  roleIds: string;

  @Column("varchar", { name: "change_time", length: 10 })
  changeTime: string;

  @Column("int", { name: "change_master" })
  changeMaster: number;

  @Column("varchar", { name: "add_time", length: 10 })
  addTime: string;

  @Column("int", { name: "add_master" })
  addMaster: number;
}
