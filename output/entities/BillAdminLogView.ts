import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("nxin_admin_log", ["billAdminLog"], {})
@Entity("bill_admin_log_view", { schema: "ecloud_rick" })
export class BillAdminLogView {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "change_time", length: 10 })
  changeTime: string;

  @Column("int", { name: "bill_admin_log", default: () => "'0'" })
  billAdminLog: number;

  @Column("text", { name: "log_time" })
  logTime: string;

  @Column("text", { name: "log_view" })
  logView: string;
}
