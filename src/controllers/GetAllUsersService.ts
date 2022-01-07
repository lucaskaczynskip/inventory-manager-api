import { Request, Response } from "express";
import { GetAllUsersService } from "../services/GetAllUsersService";

export class GetAllUserController {
  async handle(req: Request, res: Response) {
    const service = new GetAllUsersService();
    
    const usersList = await service.execute();

    const users = usersList.map(user => {
      let i = 0;
      
      user.products.forEach(u => i+= u.quantity);

      return {
        name: user.name,
        email: user.email,
        created_at: user.created_at,
        products: `The user has ${i} products in inventory` 
      }
    });

    return res.status(200).json({
      users: users 
    });
  }
}