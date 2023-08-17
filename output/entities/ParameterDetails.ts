import { Column, Entity } from "typeorm";

@Entity("parameter_details", { schema: "ecloud_rick" })
export class ParameterDetails {
  @Column("varchar", {
    primary: true,
    name: "item_type",
    comment: "??",
    length: 50,
  })
  itemType: string;

  @Column("varchar", {
    primary: true,
    name: "item_key",
    comment: "???",
    length: 50,
  })
  itemKey: string;

  @Column("varchar", { primary: true, name: "item_key2", length: 50 })
  itemKey2: string;

  @Column("varchar", { name: "item_value", comment: "?", length: 500 })
  itemValue: string;

  @Column("varchar", { name: "description", comment: "??", length: 200 })
  description: string;

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
