import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("reporttype_billperiod", ["reportType", "billPeriod"], {})
@Entity("migration_report_log", { schema: "ecloud_rick" })
export class MigrationReportLog {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "bill_period", comment: "帳單月份", length: 10 })
  billPeriod: string;

  @Column("varchar", {
    name: "report_type",
    comment: "報表類型(4=>報表4;5=>報表5;6=>報表6;7=>報表7)",
    length: 10,
  })
  reportType: string;

  @Column("varchar", {
    name: "status",
    comment: "執行狀態(n=>進行中;p=>通過;e=>錯誤)",
    length: 1,
  })
  status: string;

  @Column("int", { name: "modified_master", comment: "異動人員" })
  modifiedMaster: number;

  @Column("timestamp", {
    name: "modified_time",
    comment: "異動時間",
    default: () => "CURRENT_TIMESTAMP",
  })
  modifiedTime: Date;

  @Column("varchar", { name: "leadger_country", nullable: true, length: 3 })
  leadgerCountry: string | null;
}
