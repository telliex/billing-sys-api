import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("bill_invoice_delivery_log", { schema: "ecloud_rick" })
export class BillInvoiceDeliveryLog {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "bill_invoice_no_id" })
  billInvoiceNoId: number;

  @Column("varchar", { name: "delivery_email", length: 255 })
  deliveryEmail: string;

  @Column("varchar", { name: "delivery_email_cc", length: 255 })
  deliveryEmailCc: string;

  @Column("varchar", { name: "delivery_status", nullable: true, length: 10 })
  deliveryStatus: string | null;

  @Column("text", { name: "delivery_content" })
  deliveryContent: string;

  @Column("varchar", { name: "delivery_time", length: 20 })
  deliveryTime: string;

  @Column("int", { name: "delivery_master" })
  deliveryMaster: number;
}
