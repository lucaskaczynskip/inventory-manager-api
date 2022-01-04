import { getRepository } from "typeorm";
import { User } from "../entities/User";
import { Product } from "../entities/Product";

interface CreateProductRequest {
  name: string;
  description: string;
  quantity: number;
  expiration_date?: Date;
  user_id: string;
}

export class ProductCreateService {
  async execute({ name, description, quantity, expiration_date, user_id }: CreateProductRequest) {
    const repo = getRepository(Product);
    const userRepo = getRepository(User);
    
    if (!await userRepo.findOne({ id: user_id })) {
      return new Error("User does not exists.");
    }

    const product = repo.create({ name, description, quantity, expiration_date, user_id });

    await repo.save(product);

    return product;
  }
}