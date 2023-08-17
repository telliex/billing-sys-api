import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("bill_info_language", { schema: "ecloud_rick" })
export class BillInfoLanguage {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "change_time", length: 10 })
  changeTime: string;

  @Column("varchar", { name: "info_language", length: 200 })
  infoLanguage: string;
}
