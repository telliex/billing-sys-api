import { Column, Entity } from "typeorm";

@Entity("Account", { schema: "ecloud_rick" })
export class Account {
  @Column("varchar", { name: "Id", nullable: true, length: 10 })
  id: string | null;

  @Column("varchar", { name: "Name", nullable: true, length: 30 })
  name: string | null;

  @Column("varchar", { name: "Remark", nullable: true, length: 100 })
  remark: string | null;

  @Column("tinyint", { name: "Status", nullable: true, width: 1 })
  status: boolean | null;
}
