import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("bill_tax", { schema: "ecloud_rick" })
export class BillTax {
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
    name: "tax_name",
    nullable: true,
    comment: "稅收名稱/稅務名稱",
    length: 10,
  })
  taxName: string | null;

  @Column("decimal", {
    name: "ap_tax_rate",
    comment: "稅率 免稅default值為0",
    precision: 6,
    scale: 4,
  })
  apTaxRate: string;

  @Column("decimal", {
    name: "ar_tax_rate",
    comment: "稅率 免稅default值為0",
    precision: 6,
    scale: 4,
  })
  arTaxRate: string;

  @Column("varchar", { name: "ap_code", comment: "ap稅務代碼", length: 3 })
  apCode: string;

  @Column("varchar", { name: "ar_code", comment: "ar稅務代碼", length: 3 })
  arCode: string;
}
