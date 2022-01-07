import { getRepository } from "typeorm";
import { Product } from "../entities/Product";

export class ProductDeleteService {
  async execute(id: string) {
    const repo = getRepository(Product);
    const produtc = await repo.findOne({ id });

    if (!produtc) {
      return new Error("Product id does not exists.");
    }

    await repo.delete({ id });
  }
}