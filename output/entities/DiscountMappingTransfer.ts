import { Column, Entity } from "typeorm";

@Entity("discount_mapping_transfer", { schema: "ecloud_rick" })
export class DiscountMappingTransfer {
  @Column("varchar", { name: "add_time", length: 10 })
  addTime: string;

  @Column("int", { name: "add_master" })
  addMaster: number;

  @Column("varchar", { name: "change_time", length: 10 })
  changeTime: string;

  @Column("int", { name: "change_master" })
  changeMaster: number;

  @Column("int", { primary: true, name: "discount_num" })
  discountNum: number;

  @Column("varchar", { name: "v_cno", comment: "ECV cno", length: 10 })
  vCno: string;

  @Column("decimal", {
    name: "discount_rate",
    nullable: true,
    precision: 8,
    scale: 4,
  })
  discountRate: string | null;
}
