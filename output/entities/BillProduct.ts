import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("bill_product", { schema: "ecloud_rick" })
export class BillProduct {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "change_time", length: 10 })
  changeTime: string;

  @Column("int", { name: "change_master" })
  changeMaster: number;

  @Column("text", { name: "ProductCode" })
  productCode: string;

  @Column("text", { name: "ProductName" })
  productName: string;

  @Column("text", { name: "Description" })
  description: string;

  @Column("char", { name: "hide", length: 1, default: () => "'n'" })
  hide: string;

  @Column("tinyint", { name: "ISRebate", nullable: true, width: 1 })
  isRebate: boolean | null;
}
