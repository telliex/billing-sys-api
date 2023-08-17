import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("bill_invoice_no_for_invoice", { schema: "ecloud_rick" })
export class BillInvoiceNoForInvoice {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("char", { name: "bill_period", length: 10 })
  billPeriod: string;

  @Column("int", { name: "bill_customer", nullable: true })
  billCustomer: number | null;

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

  @Column("char", { name: "delivery_flag", length: 2 })
  deliveryFlag: string;

  @Column("int", { name: "change_master", nullable: true })
  changeMaster: number | null;

  @Column("varchar", { name: "change_time", nullable: true, length: 20 })
  changeTime: string | null;
}
