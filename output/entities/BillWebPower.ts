import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("change_master", ["changeMaster"], {})
@Index("nxin_master", ["billCustomer"], {})
@Entity("bill_web_power", { schema: "ecloud_rick" })
export class BillWebPower {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "change_time", length: 10 })
  changeTime: string;

  @Column("int", { name: "change_master", default: () => "'0'" })
  changeMaster: number;

  @Column("int", { name: "bill_customer", default: () => "'0'" })
  billCustomer: number;

  @Column("int", { name: "bill_customer_user", nullable: true })
  billCustomerUser: number | null;

  @Column("int", { name: "bill_web_name", default: () => "'0'" })
  billWebName: number;

  @Column("char", { name: "always", length: 1, default: () => "'y'" })
  always: string;

  @Column("int", { name: "sort", default: () => "'0'" })
  sort: number;

  @Column("int", { name: "pageview", default: () => "'10'" })
  pageview: number;
}
