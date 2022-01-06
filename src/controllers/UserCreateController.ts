import { Request, Response } from "express";
import { UserCreateService } from "../services/UserCreateService";

export class UserCreateController {
  async handle(req: Request, res: Response) {
    const { name, email, password } = req.body;

    const service = new UserCreateService();
    const result = await service.execute({
      name,
      email,
      password
    });

    if (result instanceof Error) {
      return res.status(400).json({
        message: result.message
      });
    }

    return res.status(200).json({
      message: "User has been created.",
      user: {
        ...result
      }
    });
  }
}