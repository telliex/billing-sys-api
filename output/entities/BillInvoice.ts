import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("bill_invoice", { schema: "ecloud_rick" })
export class BillInvoice {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "change_time", length: 10 })
  changeTime: string;

  @Column("varchar", { name: "bill_period", length: 10 })
  billPeriod: string;

  @Column("int", { name: "bill_customer" })
  billCustomer: number;

  @Column("varchar", { name: "bill_no", length: 15 })
  billNo: string;

  @Column("varchar", { name: "bill_rate", length: 10 })
  billRate: string;

  @Column("varchar", { name: "business_support", length: 5 })
  businessSupport: string;

  @Column("float", { name: "InvoiceTotalCost", precision: 12 })
  invoiceTotalCost: number;

  @Column("float", { name: "InvoiceRevenue", precision: 12 })
  invoiceRevenue: number;

  @Column("float", { name: "avg", precision: 12 })
  avg: number;

  @Column("float", { name: "max", precision: 12 })
  max: number;

  @Column("float", { name: "min", precision: 12 })
  min: number;

  @Column("float", { name: "day1", precision: 12 })
  day1: number;

  @Column("float", { name: "day2", precision: 12 })
  day2: number;

  @Column("float", { name: "day3", precision: 12 })
  day3: number;

  @Column("float", { name: "day4", precision: 12 })
  day4: number;

  @Column("float", { name: "day5", precision: 12 })
  day5: number;

  @Column("float", { name: "day6", precision: 12 })
  day6: number;

  @Column("float", { name: "day7", precision: 12 })
  day7: number;

  @Column("float", { name: "day8", precision: 12 })
  day8: number;

  @Column("float", { name: "day9", precision: 12 })
  day9: number;

  @Column("float", { name: "day10", precision: 12 })
  day10: number;

  @Column("float", { name: "day11", precision: 12 })
  day11: number;

  @Column("float", { name: "day12", precision: 12 })
  day12: number;

  @Column("float", { name: "day13", precision: 12 })
  day13: number;

  @Column("float", { name: "day14", precision: 12 })
  day14: number;

  @Column("float", { name: "day15", precision: 12 })
  day15: number;

  @Column("float", { name: "day16", precision: 12 })
  day16: number;

  @Column("float", { name: "day17", precision: 12 })
  day17: number;

  @Column("float", { name: "day18", precision: 12 })
  day18: number;

  @Column("float", { name: "day19", precision: 12 })
  day19: number;

  @Column("float", { name: "day20", precision: 12 })
  day20: number;

  @Column("float", { name: "day21", precision: 12 })
  day21: number;

  @Column("float", { name: "day22", precision: 12 })
  day22: number;

  @Column("float", { name: "day23", precision: 12 })
  day23: number;

  @Column("float", { name: "day24", precision: 12 })
  day24: number;

  @Column("float", { name: "day25", precision: 12 })
  day25: number;

  @Column("float", { name: "day26", precision: 12 })
  day26: number;

  @Column("float", { name: "day27", precision: 12 })
  day27: number;

  @Column("float", { name: "day28", precision: 12 })
  day28: number;

  @Column("float", { name: "day29", precision: 12 })
  day29: number;

  @Column("float", { name: "day30", precision: 12 })
  day30: number;

  @Column("float", { name: "day31", precision: 12 })
  day31: number;
}
