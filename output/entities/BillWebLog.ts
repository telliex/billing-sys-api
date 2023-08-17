import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("bill_session", ["billSession"], {})
@Index("bill_master", ["billCustomer"], {})
@Entity("bill_web_log", { schema: "ecloud_rick" })
export class BillWebLog {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "change_time", length: 10 })
  changeTime: string;

  @Column("varchar", { name: "bill_session", length: 32 })
  billSession: string;

  @Column("int", { name: "bill_customer", default: () => "'0'" })
  billCustomer: number;

  @Column("int", { name: "log_agent", default: () => "'0'" })
  logAgent: number;

  @Column("int", { name: "log_language", default: () => "'0'" })
  logLanguage: number;

  @Column("varchar", { name: "log_ip", length: 15 })
  logIp: string;
}
