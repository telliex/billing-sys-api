import { Column, Entity } from "typeorm";

@Entity("bill_support_close", { schema: "ecloud_rick" })
export class BillSupportClose {
  @Column("varchar", { name: "cloud", nullable: true, length: 255 })
  cloud: string | null;
}
