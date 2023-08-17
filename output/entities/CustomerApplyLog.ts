import { Column, Entity } from "typeorm";

@Entity("CustomerApplyLog", { schema: "ecloud_rick" })
export class CustomerApplyLog {
  @Column("int", { name: "SN", nullable: true })
  sn: number | null;

  @Column("varchar", { name: "CustomerId", nullable: true, length: 3 })
  customerId: string | null;

  @Column("varchar", { name: "AccountId", nullable: true, length: 10 })
  accountId: string | null;

  @Column("datetime", { name: "ApplyDate", nullable: true })
  applyDate: Date | null;

  @Column("datetime", { name: "AuditDate", nullable: true })
  auditDate: Date | null;

  @Column("varchar", { name: "AuditResult", nullable: true, length: 4 })
  auditResult: string | null;
}
