import { getRepository } from "typeorm";
import { User } from "../entities/User";

interface UserDataRequest {
  email: string;
  password: string;
}

export class UserLoginService {
  async execute({ email, password }: UserDataRequest) {
    const repo = getRepository(User);

    const userExists = await repo.findOne({ email });

    if (!userExists) {
      return new Error("User email or password incorrect.");
    }

    if (userExists.password !== password) {
      return new Error("User email or password incorrect.");
    }

    return userExists;
  }
}