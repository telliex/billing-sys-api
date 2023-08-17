import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("change_master", ["changeMaster"], {})
@Index("nxin_master", ["billMaster"], {})
@Entity("bill_admin_power", { schema: "ecloud_rick" })
export class BillAdminPower {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "change_time", length: 10 })
  changeTime: string;

  @Column("int", { name: "change_master", default: () => "'0'" })
  changeMaster: number;

  @Column("int", { name: "bill_master", default: () => "'0'" })
  billMaster: number;

  @Column("int", { name: "bill_admin_name", default: () => "'0'" })
  billAdminName: number;

  @Column("char", { name: "always", length: 1, default: () => "'y'" })
  always: string;

  @Column("int", { name: "sort", default: () => "'0'" })
  sort: number;

  @Column("int", { name: "pageview", default: () => "'10'" })
  pageview: number;
}
