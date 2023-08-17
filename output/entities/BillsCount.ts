import { Column, Entity } from "typeorm";

@Entity("bills_count", { schema: "ecloud_rick" })
export class BillsCount {
  @Column("datetime", {
    primary: true,
    name: "CreateDate",
    default: () => "'0000-00-00 00:00:00'",
  })
  createDate: Date;

  @Column("int", { name: "Bills" })
  bills: number;

  @Column("int", { name: "BillRecords" })
  billRecords: number;
}
