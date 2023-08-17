import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("change_master", ["changeMaster"], {})
@Index("bill_master_customer_bill_master_IDX", ["billMaster"], {})
@Index("bill_master_customer_bill_customer_IDX", ["billCustomer"], {})
@Entity("bill_master_customer", { schema: "ecloud_rick" })
export class BillMasterCustomer {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "change_time", length: 10 })
  changeTime: string;

  @Column("int", { name: "change_master", default: () => "'0'" })
  changeMaster: number;

  @Column("int", { name: "bill_master", default: () => "'0'" })
  billMaster: number;

  @Column("int", { name: "bill_customer", default: () => "'0'" })
  billCustomer: number;
}
