import type { User } from "@prisma/client";
import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export interface AuthRequest extends Request {
  user?: User;
}

const authMiddleware = (roles: string[] = []) => {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    const token = req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      return res.status(401).send({ error: "Unauthorized" });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET!) as User;
      req.user = decoded;

      if (roles.length && !roles.includes(req.user.role!)) {
        return res.status(403).send({ error: "Forbidden" });
      }

      next();
    } catch (e) {
      res.status(401).send({ error: "Unauthorized" });
    }
  };
};

export default authMiddleware;
