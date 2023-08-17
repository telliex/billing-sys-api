import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("msp_customer", { schema: "ecloud_rick" })
export class MspCustomer {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "create_time", length: 30 })
  createTime: string;

  @Column("varchar", { name: "linked_account_id", length: 20 })
  linkedAccountId: string;

  @Column("text", { name: "msp_alert_email" })
  mspAlertEmail: string;

  @Column("char", { name: "msp_report", length: 1 })
  mspReport: string;
}
