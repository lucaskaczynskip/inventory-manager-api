import { getRepository } from "typeorm";
import { Product } from "../entities/Product";

interface ProductUpdateRequest {
  id: string;
  name: string;
  description: string;
  quantity: number;
}

export class ProductUpdateService {
  async execute({ id, name, description, quantity }: ProductUpdateRequest) {
    const repo = getRepository(Product);
    const product = await repo.findOne({ id });

    if (!product) return new Error("Product id does not exists.");

    product.name = name ? name : product.name;
    product.description = description ? description : product.description;
    product.quantity = quantity ? quantity : product.quantity;

    await repo.save(product);

    return product;
  }
}