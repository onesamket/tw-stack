import { type AuthRequest } from "@server/middlewares/auth";
import { Router, type Response } from "express";

const protectedRouter = Router();

protectedRouter.get("/", (req: AuthRequest, res: Response) => {
  const userData = req.user;
  if (userData) {
    res.status(200).json({
      message: "Protected route accessed successfully",
      user: userData,
      resources: ["File", "Image", "Font"],
    });
  } else {
    res.status(200).json({
      message: "Unauthenticated",
      user: null,
      resources: [],
    });
  }
});

export default protectedRouter;
