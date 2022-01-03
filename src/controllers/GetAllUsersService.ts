import { Request, Response } from "express";
import { GetAllUsersService } from "../services/GetAllUsersService";

export class GetAllUserController {
  async handle(req: Request, res: Response) {
    const service = new GetAllUsersService();
    
    const result = await service.execute();
    const users = result.map(user => {
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        created_at: user.created_at
      }
    });

    return res.status(200).json({
      error: false,
      users: users 
    });
  }
}