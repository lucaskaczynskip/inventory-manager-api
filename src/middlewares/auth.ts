import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import jwt from "../database/secret";

export default (req: Request, res: Response, next: NextFunction) => {
  try {
    const auth = req.headers.authorization;

    if (!auth) {
      return res.status(400).json({
        error: true,
        message: "JWT is missing."
      });
    }

    const [bearer, token] = auth.split(" ");

    const decoded = verify(token, jwt.secret);

    if (!decoded) {
      return res.status(400).json({
        error: true,
        message: "JWT invalid."
      });
    }

    return next();

  } catch(err) {
    return res.status(400).json({
      error: true, 
      message: err.message
    });
  }
}