import { Request, Response } from "express";
import { UserDeleteService } from "../services/UserDeleteService";

export class UserDeleteController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const service = new UserDeleteService();
    const result = await service.execute(id);

    if (result instanceof Error) {
      return res.status(400).json({
        message: result.message
      });
    }

    return res.status(200).json({
      message: "User has been deleted."
    });
  }
}