import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("nxin_session", ["billSession"], {})
@Index("nxin_admin_name", ["billAdminName"], {})
@Entity("bill_admin_save", { schema: "ecloud_rick" })
export class BillAdminSave {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "change_time", length: 10 })
  changeTime: string;

  @Column("varchar", { name: "bill_session", length: 32 })
  billSession: string;

  @Column("int", { name: "bill_admin_name", default: () => "'0'" })
  billAdminName: number;

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
