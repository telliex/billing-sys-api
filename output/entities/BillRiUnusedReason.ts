import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("bill_ri_unused_reason", { schema: "ecloud_rick" })
export class BillRiUnusedReason {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "PayerAccountId", nullable: true, length: 20 })
  payerAccountId: string | null;

  @Column("varchar", { name: "RateId", nullable: true, length: 10 })
  rateId: string | null;

  @Column("varchar", { name: "OfferingType", nullable: true, length: 20 })
  offeringType: string | null;

  @Column("varchar", { name: "Remark", nullable: true, length: 200 })
  remark: string | null;
}
