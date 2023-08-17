import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("bill_price1_UN", ["billCustomer", "billProduct", "usageType"], {
  unique: true,
})
@Entity("bill_price1", { schema: "ecloud_rick" })
export class BillPrice1 {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "change_time", length: 10 })
  changeTime: string;

  @Column("int", { name: "change_master" })
  changeMaster: number;

  @Column("int", { name: "bill_customer" })
  billCustomer: number;

  @Column("int", { name: "bill_product" })
  billProduct: number;

  @Column("varchar", { name: "UsageType", length: 100 })
  usageType: string;

  @Column("text", { name: "ItemDescription" })
  itemDescription: string;

  @Column("varchar", { name: "UnitPrice", length: 30 })
  unitPrice: string;
}
