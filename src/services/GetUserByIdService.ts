import { getRepository } from "typeorm"
import { User } from "../entities/User"

export class GetUserByIdService {
  async execute(id: string) {
    const repo = getRepository(User);
    const user = await repo.findOne({ id }, { relations: ["products"] });

    if (!user) {
      return new Error("User id not exists.");
    }

    return user;
  }
}