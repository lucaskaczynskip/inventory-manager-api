import { Entity, PrimaryColumn, Column, CreateDateColumn, OneToOne, JoinColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { User } from "./User";

@Entity("products")
export class Product {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  quantity: number;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  expiration_date: Date;

  @OneToOne(() => User)
  @JoinColumn({ name: "id" })
  user_id: string;

  constructor() {
    if (!this.id) this.id = uuid();
  }
}