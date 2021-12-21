import { getRepository } from "typeorm";
import { User } from "../entities/User";

interface CreateUserRequest {
  name: string;
  email: string;
  password: string;
}

export class UserCreateService {
  async execute({ name, email, password }: CreateUserRequest): Promise<User | Error> {
    const repo = getRepository(User);

    if (await repo.findOne({ email })) {
      return new Error("User email already exists, try again with other.")
    }

    const re = /\S+@\S+\.\S+/;

    if (!re.test(email)) {
      return new Error("Invalid email format.");
    }

    const user = repo.create({ name, email, password });

    await repo.save(user);

    return user;
  }
}