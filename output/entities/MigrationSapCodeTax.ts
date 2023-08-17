import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("migration_sap_code_tax", { schema: "ecloud_rick" })
export class MigrationSapCodeTax {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "file_type", length: 20 })
  fileType: string;

  @Column("tinyint", { name: "is_tax", width: 1 })
  isTax: boolean;

  @Column("char", { name: "vat_group", length: 2 })
  vatGroup: string;
}
