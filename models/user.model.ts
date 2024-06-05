import type { User } from "@prisma/client";
import { prisma } from "@server/lib/prisma-client";
import logger from "@server/lib/winston-logger";

class UserModel {
  static async getAllUsers(): Promise<User[]> {
    try {
      return await prisma.user.findMany();
    } catch (error) {
      if (error instanceof Error) {
        logger.error("Error getting all users:", error);
        throw new Error("Could not retrieve users");
      } else {
        throw error;
      }
    }
  }

  static async createUser(
    name: string,
    email: string,
    hashPassword: string
  ): Promise<User> {
    try {
      return await prisma.user.create({
        data: { name, email, password: hashPassword },
      });
    } catch (error) {
      if (error instanceof Error) {
        logger.error("Error creating user:", error);
        throw new Error("Could not create user");
      } else {
        throw error;
      }
    }
  }

  static async getUser(id: string): Promise<User | null> {
    try {
      return await prisma.user.findUnique({
        where: { id: parseInt(id, 10) },
      });
    } catch (error) {
      if (error instanceof Error) {
        logger.error(`Error getting user with id ${id}:`, error);
        throw new Error("Could not retrieve user");
      } else {
        throw error;
      }
    }
  }

  static async updateUser(
    id: string,
    name: string,
    email: string
  ): Promise<User> {
    try {
      return await prisma.user.update({
        where: { id: parseInt(id, 10) },
        data: { name, email },
      });
    } catch (error) {
      if (error instanceof Error) {
        logger.error(`Error updating user with id ${id}:`, error);
        throw new Error("Could not update user");
      } else {
        throw error;
      }
    }
  }

  static async deleteUser(id: string): Promise<User> {
    try {
      return await prisma.user.delete({
        where: { id: parseInt(id, 10) },
      });
    } catch (error) {
      if (error instanceof Error) {
        logger.error(`Error deleting user with id ${id}:`, error);
        throw new Error("Could not delete user");
      } else {
        throw error;
      }
    }
  }
}

export default UserModel;
