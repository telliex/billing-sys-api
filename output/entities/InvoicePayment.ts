import { Column, Entity } from "typeorm";

@Entity("invoice_payment", { schema: "ecloud_rick" })
export class InvoicePayment {
  @Column("varchar", { name: "N", nullable: true, length: 255 })
  n: string | null;

  @Column("varchar", { name: "Issued_date", nullable: true, length: 255 })
  issuedDate: string | null;

  @Column("varchar", { name: "Entity", nullable: true, length: 255 })
  entity: string | null;

  @Column("varchar", { name: "Alias", nullable: true, length: 255 })
  alias: string | null;

  @Column("varchar", { name: "Payer_Account", nullable: true, length: 255 })
  payerAccount: string | null;

  @Column("varchar", { name: "Invoice_Number", nullable: true, length: 255 })
  invoiceNumber: string | null;

  @Column("decimal", {
    name: "Amount_USD",
    nullable: true,
    precision: 20,
    scale: 7,
  })
  amountUsd: string | null;

  @Column("varchar", {
    name: "VAT_Invoice_from_Invoice",
    nullable: true,
    length: 255,
  })
  vatInvoiceFromInvoice: string | null;

  @Column("varchar", { name: "GST_VAT_Number", nullable: true, length: 255 })
  gstVatNumber: string | null;

  @Column("varchar", { name: "Address", nullable: true, length: 255 })
  address: string | null;

  @Column("varchar", { name: "Account_number", nullable: true, length: 255 })
  accountNumber: string | null;

  @Column("varchar", { name: "Summary", nullable: true, length: 255 })
  summary: string | null;

  @Column("varchar", { name: "Invoice_Date", nullable: true, length: 255 })
  invoiceDate: string | null;

  @Column("varchar", {
    name: "Original_Invoice_Number",
    nullable: true,
    length: 255,
  })
  originalInvoiceNumber: string | null;

  @Column("varchar", {
    name: "Original_Invoice_Date",
    nullable: true,
    length: 255,
  })
  originalInvoiceDate: string | null;

  @Column("varchar", { name: "TOTAL_Tax", nullable: true, length: 255 })
  totalTax: string | null;

  @Column("varchar", { name: "TOTAL_Amount_USD", nullable: true, length: 255 })
  totalAmountUsd: string | null;

  @Column("varchar", { name: "TOTAL_Amount_SGD", nullable: true, length: 255 })
  totalAmountSgd: string | null;

  @Column("varchar", {
    name: "AWS_Service_Charges_USD",
    nullable: true,
    length: 255,
  })
  awsServiceChargesUsd: string | null;

  @Column("varchar", {
    name: "AWS_Service_Charges_SGD",
    nullable: true,
    length: 255,
  })
  awsServiceChargesSgd: string | null;

  @Column("varchar", { name: "Net_Charges_USD", nullable: true, length: 255 })
  netChargesUsd: string | null;

  @Column("varchar", { name: "Net_Charges_SGD", nullable: true, length: 255 })
  netChargesSgd: string | null;

  @Column("varchar", {
    name: "Total_SG_GST_VAT_Amount_USD",
    nullable: true,
    length: 255,
  })
  totalSgGstVatAmountUsd: string | null;

  @Column("varchar", {
    name: "Total_SG_GST_VAT_Amount_SGD",
    nullable: true,
    length: 255,
  })
  totalSgGstVatAmountSgd: string | null;

  @Column("varchar", { name: "Paid_For", nullable: true, length: 255 })
  paidFor: string | null;

  @Column("varchar", { name: "Write_Off_Date", nullable: true, length: 255 })
  writeOffDate: string | null;

  @Column("varchar", { name: "Note", nullable: true, length: 255 })
  note: string | null;

  @Column("int", { name: "InvoiceNo", nullable: true })
  invoiceNo: number | null;

  @Column("varchar", { name: "Column29", nullable: true, length: 1 })
  column29: string | null;

  @Column("varchar", { name: "Column30", nullable: true, length: 1 })
  column30: string | null;

  @Column("varchar", { name: "Column31", nullable: true, length: 1 })
  column31: string | null;
}
