import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("bill_invoice_revenue_detail", { schema: "ecloud_rick" })
export class BillInvoiceRevenueDetail {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "change_time", length: 10 })
  changeTime: string;

  @Column("int", { name: "bill_customer" })
  billCustomer: number;

  @Column("varchar", { name: "bill_period", length: 10 })
  billPeriod: string;

  @Column("int", { name: "bill_product" })
  billProduct: number;

  @Column("decimal", { name: "amount", precision: 10, scale: 2 })
  amount: string;
}
