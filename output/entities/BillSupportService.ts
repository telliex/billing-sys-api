import { Column, Entity } from "typeorm";

@Entity("bill_support_service", { schema: "ecloud_rick" })
export class BillSupportService {
  @Column("int", { name: "id", nullable: true })
  id: number | null;

  @Column("int", { name: "parentId", nullable: true })
  parentId: number | null;

  @Column("int", { name: "levelNum", nullable: true })
  levelNum: number | null;

  @Column("varchar", { name: "name", nullable: true, length: 254 })
  name: string | null;

  @Column("varchar", { name: "code", nullable: true, length: 254 })
  code: string | null;
}
