import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("msp_pre_generation", { schema: "ecloud_rick" })
export class MspPreGeneration {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "instance_type_old", length: 20 })
  instanceTypeOld: string;

  @Column("varchar", { name: "instance_type_new", length: 20 })
  instanceTypeNew: string;
}
