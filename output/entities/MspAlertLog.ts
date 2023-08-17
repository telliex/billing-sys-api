import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("bill_customer", ["linkedAccountId"], {})
@Entity("msp_alert_log", { schema: "ecloud_rick" })
export class MspAlertLog {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "msp_alert_rule" })
  mspAlertRule: number;

  @Column("varchar", { name: "linked_account_id", length: 20 })
  linkedAccountId: string;

  @Column("varchar", { name: "region", length: 20 })
  region: string;

  @Column("varchar", { name: "namespace", length: 50 })
  namespace: string;

  @Column("varchar", { name: "resource_id", length: 255 })
  resourceId: string;

  @Column("text", { name: "resource_tags" })
  resourceTags: string;

  @Column("float", { name: "datapoint", precision: 12 })
  datapoint: number;

  @Column("varchar", { name: "alert_time", length: 30 })
  alertTime: string;

  @Column("char", { name: "msp_lock", length: 1 })
  mspLock: string;
}
