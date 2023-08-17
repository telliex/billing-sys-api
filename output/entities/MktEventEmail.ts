import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("id_UNIQUE", ["id"], { unique: true })
@Entity("mkt_event_email", { schema: "ecloud_rick" })
export class MktEventEmail {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("datetime", { name: "create_date", nullable: true })
  createDate: Date | null;

  @Column("varchar", { name: "email", nullable: true, length: 255 })
  email: string | null;
}
