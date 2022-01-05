import { Entity, PrimaryColumn, Column, CreateDateColumn, OneToMany, JoinColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Product } from "./Product";

@Entity("users")
export class User {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @CreateDateColumn()
  created_at: Date;

  @OneToMany(() => Product, product => product.user)
  @JoinColumn({ name: "id" })
  products: Product;

  constructor() {
    if (!this.id) this.id = uuid();
  }
}