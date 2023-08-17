import { Column, Entity } from "typeorm";

@Entity("bill_client_level", { schema: "ecloud_rick" })
export class BillClientLevel {
  @Column("text", { name: "cno", nullable: true })
  cno: string | null;

  @Column("text", { name: "level", nullable: true })
  level: string | null;
}
