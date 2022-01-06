import { Request, Response } from "express";
import { GetAllUsersService } from "../services/GetAllUsersService";

export class GetAllUserController {
  async handle(req: Request, res: Response) {
    const service = new GetAllUsersService();
    
    const users = await service.execute();

    return res.status(200).json({
      users: users 
    });
  }
}