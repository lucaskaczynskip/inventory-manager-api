import { getRepository } from "typeorm";
import { User } from "../entities/User";

export class UserDeleteService {
  async execute(id: string) {
    const repo = getRepository(User);

    if (!await repo.findOne({ id })) {
      return new Error("Incorrect id.")
    }

    await repo.delete({ id });
  }
}