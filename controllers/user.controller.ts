import { handleServerError, handleValidationError } from "@server/lib/helpers";
import UserModel from "@server/models/user.model";
import { UserSchema } from "@server/schemas/user.schema";
import type { Request, Response } from "express";

const userController = {
  getUsers: async (_req: Request, res: Response) => {
    try {
      const users = await UserModel.getAllUsers();
      res.json(users);
    } catch (error) {
      handleServerError(res, error);
    }
  },

  createUser: async (req: Request, res: Response) => {
    try {
      const { name, email } = UserSchema.parse(req.body);
      const newUser = await UserModel.createUser(name, email);
      res.json(newUser);
    } catch (error) {
      handleValidationError(res, error);
    }
  },

  getUser: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      if (!id || isNaN(parseInt(id, 10))) {
        return res.status(400).json({ message: "Invalid user ID" });
      }
      const user = await UserModel.getUser(id);
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ message: "User not found" });
      }
    } catch (error) {
      handleServerError(res, error);
    }
  },

  updateUser: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      if (!id || isNaN(parseInt(id, 10))) {
        return res.status(400).json({ message: "Invalid user ID" });
      }
      const { name, email } = req.body;
      const updatedUser = await UserModel.updateUser(id, name, email);
      res.json(updatedUser);
    } catch (error) {
      handleServerError(res, error);
    }
  },

  deleteUser: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      if (!id || isNaN(parseInt(id, 10))) {
        return res.status(400).json({ message: "Invalid user ID" });
      }
      const deletedUser = await UserModel.deleteUser(id);
      res.json(deletedUser);
    } catch (error) {
      handleServerError(res, error);
    }
  },
};

export default userController;
