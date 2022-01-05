import { getRepository } from "typeorm"
import { Product } from "../entities/Product";
import { User } from "../entities/User"

export class GetAllUsersService {
  async execute() {
    const repo = getRepository(User);

    const users = await repo.find({ 
      relations: ["products"]  
    });

    return users;
  }
}