import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("msp_alert_rule", { schema: "ecloud_rick" })
export class MspAlertRule {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "ruleName", length: 30 })
  ruleName: string;

  @Column("varchar", { name: "namespace", length: 30 })
  namespace: string;

  @Column("text", { name: "metricName" })
  metricName: string;

  @Column("varchar", { name: "dimensionsName", length: 50 })
  dimensionsName: string;

  @Column("int", { name: "period" })
  period: number;

  @Column("varchar", { name: "statistics", length: 30 })
  statistics: string;

  @Column("varchar", { name: "unit", length: 20 })
  unit: string;

  @Column("float", { name: "alertThreshold", precision: 12 })
  alertThreshold: number;

  @Column("text", { name: "alertSubject" })
  alertSubject: string;

  @Column("text", { name: "alertMessage" })
  alertMessage: string;
}
