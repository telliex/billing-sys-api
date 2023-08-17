import { Column, Entity } from "typeorm";

@Entity("bill_support_ticket_history", { schema: "ecloud_rick" })
export class BillSupportTicketHistory {
  @Column("varchar", { name: "caseId", length: 256 })
  caseId: string;

  @Column("datetime", { name: "time" })
  time: Date;

  @Column("varchar", { name: "status", length: 256 })
  status: string;

  @Column("varchar", { name: "version", length: 256 })
  version: string;

  @Column("varchar", { name: "user", nullable: true, length: 256 })
  user: string | null;
}
