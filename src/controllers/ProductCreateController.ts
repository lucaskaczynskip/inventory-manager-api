import { Request, Response } from "express";
import { ProductCreateService } from "../services/ProductCreateService";

export class ProductCreateController {
  async handle(req: Request, res: Response) {
    const { name, description, quantity } = req.body;
    const { id } = req.params;

    let qtd = !quantity ? 1 : quantity;

    const service = new ProductCreateService();
    const result = await service.execute({ 
      name, description, quantity: qtd, user_id: id 
    });

    if (result instanceof Error) {
      return res.status(400).json({
        error: true,
        message: result.message
      })
    }
    
    return res.status(200).json({
      error: false,
      message: "Product has been created.",
      product: {
        ...result
      }
    })
  }
}