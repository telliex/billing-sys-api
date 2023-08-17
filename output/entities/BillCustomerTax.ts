import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("cno", ["cno"], { unique: true })
@Entity("bill_customer_tax", { schema: "ecloud_rick" })
export class BillCustomerTax {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "change_time", comment: "timestamp", length: 10 })
  changeTime: string;

  @Column("int", { name: "change_master", comment: "bill_master.id" })
  changeMaster: number;

  @Column("varchar", {
    name: "cno",
    unique: true,
    comment: "bill_customer.cno",
    length: 10,
  })
  cno: string;

  @Column("int", { name: "tax_id", comment: "bill_tax.id 稅務代號" })
  taxId: number;

  @Column("int", {
    name: "digital_tax_id",
    comment: "bill_digital_tax.id 數位稅代號, 若無數位稅default為0",
  })
  digitalTaxId: number;

  @Column("int", { name: "company_tax_id", nullable: true })
  companyTaxId: number | null;

  @Column("int", { name: "company_digital_tax_id", nullable: true })
  companyDigitalTaxId: number | null;
}
