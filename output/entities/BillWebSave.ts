import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("bill_session", ["billSession"], {})
@Index("bill_admin_name", ["billWebName"], {})
@Entity("bill_web_save", { schema: "ecloud_rick" })
export class BillWebSave {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "change_time", length: 10 })
  changeTime: string;

  @Column("varchar", { name: "bill_session", length: 32 })
  billSession: string;

  @Column("int", { name: "bill_web_name", default: () => "'0'" })
  billWebName: number;

  @Column("char", { name: "bill_login", length: 1, default: () => "'n'" })
  billLogin: string;

  @Column("varchar", { name: "key_login", length: 4 })
  keyLogin: string;

  @Column("varchar", { name: "key_post", length: 4 })
  keyPost: string;

  @Column("int", { name: "times_login", default: () => "'0'" })
  timesLogin: number;

  @Column("text", { name: "bill_other_name" })
  billOtherName: string;
}
