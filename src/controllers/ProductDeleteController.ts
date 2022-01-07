import { Request, Response } from "express";
import { ProductDeleteService } from "../services/ProductDeleteService";


export class ProductDeleteController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const service = new ProductDeleteService();
    const product = await service.execute(id);

    if (product instanceof Error) {
      return res.status(400).json({
        message: product.message
      });
    }

    return res.status(200).json({
      message: "Product has been deleted."
    });
  }
}