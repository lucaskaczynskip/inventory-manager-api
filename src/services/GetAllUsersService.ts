import { getRepository } from "typeorm"
import { User } from "../entities/User"

export class GetAllUsersService {
  async execute() {
    const repo = getRepository(User);

    return repo.find();
  }
}