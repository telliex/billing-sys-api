import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("change_master", ["changeMaster"], {})
@Entity("bill_master_customer2", { schema: "ecloud_rick" })
export class BillMasterCustomer2 {
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
