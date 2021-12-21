import { Request, Response } from "express";
import { UserLoginService } from "../services/UserLoginService";
import { sign } from "jsonwebtoken";
import jwt from "../database/secret";

export class UserLoginController {
  async handle(req: Request, res: Response) {
    const { email, password } = req.body;

    const service = new UserLoginService();
    const user = await service.execute({ email, password });

    if (user instanceof Error) {
      return res.status(400).json({
        error: true,
        message: user.message
      })
    }

    const token = sign({}, jwt.secret, {
      subject: user.id,
      expiresIn: jwt.expiresIn
    });

    return res.status(200).json({
      error: false,
      user: {
        ...user
      },
      token: token
    })
  }
}