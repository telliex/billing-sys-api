import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("migration_por1_bill_close_IDX", ["billClose"], {})
@Index("migration_por1_leadger_country_IDX", ["leadgerCountry"], {})
@Entity("migration_por1", { schema: "ecloud_rick" })
export class MigrationPor1 {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "bill_close", default: () => "'0'" })
  billClose: number;

  @Column("int", { name: "year" })
  year: number;

  @Column("int", { name: "month" })
  month: number;

  @Column("varchar", {
    name: "leadger_country",
    length: 3,
    default: () => "'na'",
  })
  leadgerCountry: string;

  @Column("varchar", { name: "parent_key", length: 11 })
  parentKey: string;

  @Column("int", { name: "line_num" })
  lineNum: number;

  @Column("varchar", { name: "item_code", nullable: true, length: 20 })
  itemCode: string | null;

  @Column("int", { name: "quantity", nullable: true })
  quantity: number | null;

  @Column("int", { name: "units_of_measurment", nullable: true })
  unitsOfMeasurment: number | null;

  @Column("decimal", { name: "price", nullable: true, precision: 10, scale: 2 })
  price: string | null;

  @Column("varchar", { name: "vat_group", nullable: true, length: 2 })
  vatGroup: string | null;

  @Column("varchar", { name: "warehouse_code", nullable: true, length: 8 })
  warehouseCode: string | null;

  @Column("decimal", { name: "line_total", precision: 17, scale: 2 })
  lineTotal: string;

  @Column("varchar", { name: "costing_code", nullable: true, length: 8 })
  costingCode: string | null;

  @Column("decimal", { name: "realcost", precision: 17, scale: 2 })
  realcost: string;

  @Column("decimal", { name: "dop_total", precision: 17, scale: 2 })
  dopTotal: string;

  @Column("decimal", {
    name: "over_short_price",
    precision: 17,
    scale: 2,
    default: () => "'0.00'",
  })
  overShortPrice: string;

  @Column("decimal", {
    name: "over_short_price_realcost",
    precision: 17,
    scale: 2,
    default: () => "'0.00'",
  })
  overShortPriceRealcost: string;

  @Column("decimal", { name: "tax_cost", precision: 17, scale: 2 })
  taxCost: string;
}