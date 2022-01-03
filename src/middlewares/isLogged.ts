import { Request, Response, NextFunction } from "express";
import { decode } from "jsonwebtoken";

export default (req: Request, res: Response, next: NextFunction) => {
  try {
    const auth = req.headers.authorization;
    const [bearer, token] = auth.split(" ");
    const { id } = req.params;
    const decoded = decode(token, { json: true });
    
    if (id != decoded.sub) {
      return res.status(400).json({
        error: true,
        message: "Unauthorized action."
      })
    }

    return next();
  } catch(err) {
    return res.status(400).json({
      error: true, 
      message: err.message
    });
  }
}