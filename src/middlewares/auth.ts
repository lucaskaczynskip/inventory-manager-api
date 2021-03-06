import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

export default (req: Request, res: Response, next: NextFunction) => {
  try {
    const auth = req.headers.authorization;

    if (!auth) {
      return res.status(400).json({
        message: "JWT is missing."
      });
    }

    const [bearer, token] = auth.split(" ");

    const decoded = verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      return res.status(400).json({
        message: "JWT invalid."
      });
    }

    return next();

  } catch(err) {
    return res.status(400).json({
      message: err.message
    });
  }
}