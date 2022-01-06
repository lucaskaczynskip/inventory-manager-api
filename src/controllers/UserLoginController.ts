import { Request, Response } from "express";
import { UserLoginService } from "../services/UserLoginService";
import { sign } from "jsonwebtoken";

export class UserLoginController {
  async handle(req: Request, res: Response) {
    const { email, password } = req.body;

    const service = new UserLoginService();
    const user = await service.execute({ email, password });

    if (user instanceof Error) {
      return res.status(400).json({
        message: user.message
      })
    }

    const token = sign({}, process.env.JWT_SECRET, {
      subject: user.id,
      expiresIn: process.env.JWT_EXPIRESIN
    });

    return res.status(200).json({
      user: {
        ...user
      },
      token: token
    })
  }
}