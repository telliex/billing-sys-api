import { Column, Entity, Index } from "typeorm";

@Index("instance_size_UNIQUE", ["instanceSize"], { unique: true })
@Entity("bill_Instance_size_factor", { schema: "ecloud_rick" })
export class BillInstanceSizeFactor {
  @Column("varchar", { primary: true, name: "instance_size", length: 20 })
  instanceSize: string;

  @Column("decimal", { name: "instance_factor", precision: 8, scale: 4 })
  instanceFactor: string;
}
