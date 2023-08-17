import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("bill_itemc", { schema: "ecloud_rick" })
export class BillItemc {
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

  @Column("text", { name: "UsageType" })
  usageType: string;

  @Column("text", { name: "ItemDescription" })
  itemDescription: string;

  @Column("varchar", { name: "UnitPrice", length: 10 })
  unitPrice: string;
}
