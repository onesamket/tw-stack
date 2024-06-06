import {
  handleServerError,
  handleValidationError,
} from "@server/libs/helpers/error-tracker";
import UserModel from "@server/models/user.model";
import { UserSchema } from "@server/schemas/user.schema";
import bcrypt from "bcryptjs";
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
      const { name, email, password } = UserSchema.parse(req.body);
      const hashedPassword = await bcrypt.hash(password, 10);

      const existingUser = await UserModel.getUserByEmail(email);
      if (existingUser) {
        res.status(400).json({ message: "Email is already registered" });
      } else {
        const newUser = await UserModel.createUser(name, email, hashedPassword);
        res.status(201).json(newUser);
      }
    } catch (error) {
      handleValidationError(res, error);
    }
  },

  getUser: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      if (!id) {
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
      if (!id) {
        return res.status(400).json({ message: "Invalid user ID" });
      }
      const { name, email } = req.body;
      const updatedUser = await UserModel.updateUser(id, name, email);
      if (updatedUser) {
        res.json(updatedUser);
      } else {
        res.status(404).json({ message: "User not found" });
      }
    } catch (error) {
      handleServerError(res, error);
    }
  },

  deleteUser: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ message: "Invalid user ID" });
      }
      const deletedUser = await UserModel.deleteUser(id);
      if (deletedUser) {
        res.json(deletedUser);
      } else {
        res.status(404).json({ message: "User not found" });
      }
    } catch (error) {
      handleServerError(res, error);
    }
  },
};

export default userController;
