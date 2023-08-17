import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("bill_customer", ["billCustomer"], {})
@Entity("msp_billing_alert", { schema: "ecloud_rick" })
export class MspBillingAlert {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "change_time", length: 10 })
  changeTime: string;

  @Column("int", { name: "change_master" })
  changeMaster: number;

  @Column("int", { name: "bill_customer" })
  billCustomer: number;

  @Column("int", { name: "estimated_charges" })
  estimatedCharges: number;

  @Column("varchar", { name: "alert_time", length: 30 })
  alertTime: string;

  @Column("char", { name: "hide", length: 1, default: () => "'n'" })
  hide: string;
}
