import { Request, Response } from "express";
import { UserUpdateService } from "../services/UserUpdateService";

export class UserUpdateController {
  async handle(req: Request, res: Response) {
    const { name, email, password } = req.body;
    const { id } = req.params;

    const service = new UserUpdateService();
    const result = await service.execute({
      id,
      name, 
      email,
      password
    });

    if (result instanceof Error)
      return res.status(400).json({
        message: result.message
      });

    return res.status(200).json({
      message: "User has been updated.",
      user: {
        ...result
      }
    });
  }
}