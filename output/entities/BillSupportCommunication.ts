import { Column, Entity } from "typeorm";

@Entity("bill_support_communication", { schema: "ecloud_rick" })
export class BillSupportCommunication {
  @Column("varchar", { name: "caseId", length: 255 })
  caseId: string;

  @Column("varchar", { name: "submittedBy", length: 255 })
  submittedBy: string;

  @Column("datetime", { name: "timeCreated", nullable: true })
  timeCreated: Date | null;

  @Column("text", { name: "body", nullable: true })
  body: string | null;

  @Column("varchar", { name: "cc", nullable: true, length: 255 })
  cc: string | null;

  @Column("varchar", { name: "double_check", nullable: true, length: 3 })
  doubleCheck: string | null;

  @Column("datetime", { name: "check_time", nullable: true })
  checkTime: Date | null;

  @Column("datetime", { name: "ecloud_note", nullable: true })
  ecloudNote: Date | null;

  @Column("datetime", { name: "customer_note", nullable: true })
  customerNote: Date | null;

  @Column("datetime", { name: "check_note", nullable: true })
  checkNote: Date | null;

  @Column("varchar", { name: "version", nullable: true, length: 255 })
  version: string | null;
}
