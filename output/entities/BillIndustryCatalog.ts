import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("bill_industry_catalog", { schema: "ecloud_rick" })
export class BillIndustryCatalog {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("char", { name: "memo", length: 100 })
  memo: string;
}
