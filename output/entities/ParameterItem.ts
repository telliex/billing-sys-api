import { Column, Entity } from "typeorm";

@Entity("parameter_item", { schema: "ecloud_rick" })
export class ParameterItem {
  @Column("varchar", {
    primary: true,
    name: "item_type",
    comment: "??",
    length: 50,
  })
  itemType: string;

  @Column("varchar", { name: "description", comment: "??", length: 200 })
  description: string;

  @Column("tinyint", {
    name: "is_user_control",
    comment: "????User??",
    width: 1,
  })
  isUserControl: boolean;

  @Column("text", { name: "using_system", comment: "????" })
  usingSystem: string;

  @Column("varchar", {
    name: "remark",
    nullable: true,
    comment: "??",
    length: 200,
  })
  remark: string | null;

  @Column("tinyint", { name: "is_on", comment: "????", width: 1 })
  isOn: boolean;

  @Column("varchar", { name: "modifier", comment: "???", length: 50 })
  modifier: string;

  @Column("datetime", { name: "modifier_time", comment: "????" })
  modifierTime: Date;

  @Column("varchar", { name: "modifier_system", comment: "????", length: 200 })
  modifierSystem: string;
}
