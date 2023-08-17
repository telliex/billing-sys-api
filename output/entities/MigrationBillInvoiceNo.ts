import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("migration_bill_invoice_no", { schema: "ecloud_rick" })
export class MigrationBillInvoiceNo {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "bill_period", length: 10 })
  billPeriod: string;

  @Column("int", { name: "bill_customer" })
  billCustomer: number;

  @Column("varchar", { name: "cno", nullable: true, length: 10 })
  cno: string | null;

  @Column("varchar", { name: "invoice_no", nullable: true, length: 20 })
  invoiceNo: string | null;

  @Column("varchar", { name: "currency", nullable: true, length: 5 })
  currency: string | null;

  @Column("varchar", { name: "invoice_amount", nullable: true, length: 20 })
  invoiceAmount: string | null;

  @Column("text", { name: "invoice_remark", nullable: true })
  invoiceRemark: string | null;

  @Column("char", { name: "auto_invoice", length: 2 })
  autoInvoice: string;

  @Column("char", { name: "delivery_flag", nullable: true, length: 2 })
  deliveryFlag: string | null;

  @Column("int", { name: "change_master" })
  changeMaster: number;

  @Column("varchar", { name: "change_time", length: 10 })
  changeTime: string;

  @Column("int", { name: "bill_close" })
  billClose: number;
}
