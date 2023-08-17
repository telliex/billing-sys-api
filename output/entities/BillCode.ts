import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("bill_code", { schema: "ecloud_rick" })
export class BillCode {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", {
    name: "code_type",
    nullable: true,
    comment: "Code type, 0:分類 1:值",
    length: 1,
  })
  codeType: string | null;

  @Column("varchar", {
    name: "code_id",
    nullable: true,
    comment: "Code id",
    length: 20,
  })
  codeId: string | null;

  @Column("varchar", {
    name: "code_name",
    nullable: true,
    comment: "Code name",
    length: 512,
  })
  codeName: string | null;

  @Column("varchar", { name: "code_name_en", length: 512 })
  codeNameEn: string;

  @Column("varchar", { name: "code_name_cn", length: 512 })
  codeNameCn: string;

  @Column("int", { name: "code_order", nullable: true, comment: "Code order" })
  codeOrder: number | null;

  @Column("int", {
    name: "code_upper_id",
    nullable: true,
    comment: "上層 level id",
  })
  codeUpperId: number | null;

  @Column("varchar", {
    name: "add_time",
    nullable: true,
    comment: "YYYY/mm/dd hh:mi:ss",
    length: 20,
  })
  addTime: string | null;

  @Column("int", { name: "add_user", nullable: true })
  addUser: number | null;

  @Column("varchar", {
    name: "upd_time",
    nullable: true,
    comment: "YYYY/mm/dd hh:mi:ss",
    length: 20,
  })
  updTime: string | null;

  @Column("int", { name: "upd_user", nullable: true })
  updUser: number | null;

  @Column("char", {
    name: "hide",
    nullable: true,
    comment: "y:deleted; n:normal",
    length: 1,
  })
  hide: string | null;
}
