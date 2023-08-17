import { Column, Entity } from "typeorm";

@Entity("ri_instance_base_type", { schema: "ecloud_rick" })
export class RiInstanceBaseType {
  @Column("varchar", { name: "service", nullable: true, length: 100 })
  service: string | null;

  @Column("varchar", { name: "family", nullable: true, length: 10 })
  family: string | null;

  @Column("varchar", { name: "basetype", nullable: true, length: 10 })
  basetype: string | null;

  @Column("varchar", { name: "normalize_factor", nullable: true, length: 5 })
  normalizeFactor: string | null;
}
