import userController from "@server/controllers/user.controller";
import { Router } from "express";

const userRouter = Router();
userRouter.get("/", userController.getUsers);
userRouter.get("/:id", userController.getUser);
userRouter.post("/", userController.createUser);

export default userRouter;
