import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("bill_admin_log", ["billWebLog"], {})
@Entity("bill_web_log_view", { schema: "ecloud_rick" })
export class BillWebLogView {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "change_time", length: 10 })
  changeTime: string;

  @Column("int", { name: "bill_web_log", default: () => "'0'" })
  billWebLog: number;

  @Column("text", { name: "log_time" })
  logTime: string;

  @Column("text", { name: "log_view" })
  logView: string;
}
