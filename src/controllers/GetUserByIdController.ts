import { Request, Response } from "express";
import { GetUserByIdService } from "../services/GetUserByIdService";

export class GetUserByIdController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const service = new GetUserByIdService();
    const user = await service.execute(id);

    if (user instanceof Error) {
      return res.status(400).json({
        message: user.message
      });
    }

    return res.status(200).json({
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        created_at: user.created_at
      }
    });
  }
}