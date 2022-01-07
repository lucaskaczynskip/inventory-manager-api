import { getRepository } from "typeorm";
import { User } from "../entities/User";

interface UserUpdateRequest {
  id: string;
  name: string;
  email: string;
  password: string;
}

export class UserUpdateService {
  async execute({ id, name, email, password }: UserUpdateRequest) {
    const repo = getRepository(User);

    const user = await repo.findOne({ id });

    if (!user) {
      return new Error("User does not exists.");
    }

    user.name = name ? name : user.name;
    user.email = email ? email : user.email;
    user.password = password ? password : user.password;

    await repo.save(user);

    return user;
  }
}