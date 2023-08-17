import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("bill_support_RD", { schema: "ecloud_rick" })
export class BillSupportRd {
  @Column("varchar", { name: "name", nullable: true, length: 255 })
  name: string | null;

  @Column("varchar", { name: "password", nullable: true, length: 255 })
  password: string | null;

  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "LinkedAccountName", nullable: true, length: 255 })
  linkedAccountName: string | null;

  @Column("varchar", { name: "role", nullable: true, length: 255 })
  role: string | null;

  @Column("varchar", { name: "mail", nullable: true, length: 255 })
  mail: string | null;

  @Column("char", { name: "hide", nullable: true, length: 1 })
  hide: string | null;
}
