import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("migration_sap_code_warehousecode", { schema: "ecloud_rick" })
export class MigrationSapCodeWarehousecode {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "leadger_country", length: 3 })
  leadgerCountry: string;

  @Column("varchar", { name: "warehouse_code", length: 3 })
  warehouseCode: string;
}
