import { Column, Entity, Index } from "typeorm";

@Index("idx_cno_online_pay", ["cno", "onlinePay"], {})
@Entity("bill_cno", { schema: "ecloud_rick" })
export class BillCno {
  @Column("varchar", { primary: true, name: "cno", length: 10 })
  cno: string;

  @Column("int", { name: "online_pay", nullable: true })
  onlinePay: number | null;

  @Column("varchar", {
    name: "status_id",
    nullable: true,
    length: 1,
    default: () => "'1'",
  })
  statusId: string | null;

  @Column("datetime", {
    name: "created_time",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  createdTime: Date | null;

  @Column("int", { name: "created_by", nullable: true })
  createdBy: number | null;

  @Column("datetime", {
    name: "modified_time",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  modifiedTime: Date | null;

  @Column("int", { name: "modified_by", nullable: true })
  modifiedBy: number | null;
}
