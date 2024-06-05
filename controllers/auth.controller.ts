import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import {
  handleServerError,
  handleValidationError,
} from "@server/libs/helpers/error-tracker";
import UserModel from "@server/models/user.model";
import { z } from "zod";
import type { Request, Response } from "express";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

const authController = {
  login: async (req: Request, res: Response) => {
    try {
      const { email, password } = loginSchema.parse(req.body);
      // Check if user exists
      const user = await UserModel.getUserByEmail(email);
      if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      // Check password
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      // Generate JWT token
      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET_KEY!, {
        expiresIn: "1h",
      });

      res.json({ token });
    } catch (error) {
      if (error instanceof z.ZodError) {
        handleValidationError(res, error);
      } else {
        handleServerError(res, error);
      }
    }
  },
};

export default authController;
