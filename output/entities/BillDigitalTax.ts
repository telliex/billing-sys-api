import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("bill_digital_tax", { schema: "ecloud_rick" })
export class BillDigitalTax {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "change_time", comment: "timestamp", length: 10 })
  changeTime: string;

  @Column("int", { name: "change_master", comment: "bill_master.id" })
  changeMaster: number;

  @Column("int", { name: "company", comment: "公司別(1:ECV;2:...)" })
  company: number;

  @Column("varchar", {
    name: "ledger_country",
    comment: "bill_customer.leadger_country",
    length: 3,
  })
  ledgerCountry: string;

  @Column("varchar", {
    name: "country",
    comment: "bill_customer.country",
    length: 3,
  })
  country: string;

  @Column("decimal", {
    name: "tax_rate",
    comment: "稅率 免稅default值為0",
    precision: 6,
    scale: 4,
  })
  taxRate: string;

  @Column("varchar", {
    name: "tax_name",
    nullable: true,
    comment: "稅收名稱/稅務名稱",
    length: 10,
  })
  taxName: string | null;
}
