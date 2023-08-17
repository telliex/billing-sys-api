import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("bill_customer", ["billCustomer"], {})
@Entity("bill_web_role", { schema: "ecloud_rick" })
export class BillWebRole {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "change_time", length: 10 })
  changeTime: string;

  @Column("int", { name: "change_master" })
  changeMaster: number;

  @Column("int", { name: "bill_customer" })
  billCustomer: number;

  @Column("int", { name: "bill_customer_role" })
  billCustomerRole: number;

  @Column("int", { name: "bill_web_name" })
  billWebName: number;
}
