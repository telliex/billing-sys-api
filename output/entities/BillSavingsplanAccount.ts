import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("LinkedAccountId", ["linkedAccountId"], {})
@Entity("bill_savingsplan_account", { schema: "ecloud_rick" })
export class BillSavingsplanAccount {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "PayerAccountId", nullable: true, length: 20 })
  payerAccountId: string | null;

  @Column("varchar", { name: "LinkedAccountId", nullable: true, length: 20 })
  linkedAccountId: string | null;

  @Column("varchar", { name: "cno", nullable: true, length: 10 })
  cno: string | null;

  @Column("varchar", { name: "cname", nullable: true, length: 100 })
  cname: string | null;

  @Column("datetime", {
    name: "create_time",
    comment: "The time when this plan was discovered",
    default: () => "CURRENT_TIMESTAMP",
  })
  createTime: Date;

  @Column("datetime", {
    name: "disabled_time",
    nullable: true,
    comment: "The datetime that disable RI and SP sharing to the account",
  })
  disabledTime: Date | null;

  @Column("char", {
    name: "status",
    comment: "E = Enabled, D = Disabled",
    length: 1,
    default: () => "'E'",
  })
  status: string;

  @Column("int", { name: "change_master", nullable: true })
  changeMaster: number | null;

  @Column("varchar", { name: "REMARK", nullable: true, length: 100 })
  remark: string | null;
}
