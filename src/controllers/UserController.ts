import { Request, Response } from "express";
import { Create } from "../services/User/Create";

export class UserController {
  async create(req: Request, res: Response) {
    const { name, email, password } = req.body;

    const service = new Create();
    const result = await service.execute({
      name,
      email,
      password
    });

    if (result instanceof Error) {
      return res.status(400).json({
        error: true,
        message: result.message
      });
    }

    return res.status(200).json({
      error: false,
      message: "User has been created.",
      user: {
        ...result
      }
    });
  }
}