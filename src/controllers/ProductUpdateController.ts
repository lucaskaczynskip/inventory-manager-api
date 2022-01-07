import { Request, Response } from "express";
import { ProductUpdateService } from "../services/ProductUpdateService";

export class ProductUpdateController {
  async handle(req: Request, res: Response) {
    const { name, description, quantity } = req.body;
    const { id } = req.params;

    const service = new ProductUpdateService();
    const result = await service.execute({
      id,
      name, 
      description,
      quantity
    });

    if (result instanceof Error)
      return res.status(400).json({
        message: result.message
      });

    return res.status(200).json({
      message: "Product has been updated.",
      Product: {
        ...result
      }
    });
  }
}