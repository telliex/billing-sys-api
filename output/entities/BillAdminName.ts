import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("change_master", ["changeMaster"], {})
@Entity("bill_admin_name", { schema: "ecloud_rick" })
export class BillAdminName {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "change_time", length: 10 })
  changeTime: string;

  @Column("int", { name: "change_master", default: () => "'0'" })
  changeMaster: number;

  @Column("char", { name: "master", length: 1, default: () => "'n'" })
  master: string;

  @Column("varchar", { name: "name", length: 20 })
  name: string;

  @Column("varchar", { name: "code", length: 50 })
  code: string;

  @Column("varchar", { name: "forcode", length: 50 })
  forcode: string;

  @Column("char", { name: "menu", length: 1, default: () => "'n'" })
  menu: string;

  @Column("varchar", { name: "sort", length: 4, default: () => "'0000'" })
  sort: string;

  @Column("char", { name: "pageviewopen", length: 1, default: () => "'n'" })
  pageviewopen: string;

  @Column("text", { name: "memo" })
  memo: string;
}
