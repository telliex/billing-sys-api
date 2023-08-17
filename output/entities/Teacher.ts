import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("index_three_key", ["name", "age", "score"], {})
@Entity("teacher", { schema: "ecloud_rick" })
export class Teacher {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("varchar", { name: "name", nullable: true, length: 10 })
  name: string | null;

  @Column("int", { name: "age", nullable: true })
  age: number | null;

  @Column("int", { name: "score", nullable: true })
  score: number | null;
}
