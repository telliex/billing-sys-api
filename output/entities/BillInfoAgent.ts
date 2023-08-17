import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("bill_info_agent", { schema: "ecloud_rick" })
export class BillInfoAgent {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "change_time", length: 10 })
  changeTime: string;

  @Column("text", { name: "info_agent" })
  infoAgent: string;
}
