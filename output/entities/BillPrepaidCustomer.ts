import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("bill_prepaid_customer_group_id_IDX", ["groupId", "status"], {})
@Index("bill_prepaid_customer_bill_customer_IDX", ["billCustomer"], {})
@Entity("bill_prepaid_customer", { schema: "ecloud_rick" })
export class BillPrepaidCustomer {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "group_id" })
  groupId: number;

  @Column("int", { name: "bill_customer" })
  billCustomer: number;

  @Column("datetime", { name: "add_time", nullable: true })
  addTime: Date | null;

  @Column("datetime", { name: "change_time", nullable: true })
  changeTime: Date | null;

  @Column("int", { name: "add_master", nullable: true })
  addMaster: number | null;

  @Column("int", { name: "change_master", nullable: true })
  changeMaster: number | null;

  @Column("smallint", {
    name: "status",
    nullable: true,
    comment: "0: 尚未審核 , 1:審核通過, -1 刪除/隱藏",
    default: () => "'0'",
  })
  status: number | null;
}
