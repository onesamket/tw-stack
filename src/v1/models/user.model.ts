import type { User } from "@prisma/client";
import { prisma } from "@server/libs/prisma-client";
import logger from "@server/libs/winston-logger";

class UserModel {
  static async getAllUsers(): Promise<User[]> {
    try {
      return await prisma.user.findMany();
    } catch (error) {
      logger.error("Error getting all users:", error);
      throw new Error("Could not retrieve users");
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
      logger.error("Error creating user:", error);
      throw new Error("Could not create user");
    }
  }

  static async getUser(id: string): Promise<User | null> {
    try {
      return await prisma.user.findUnique({
        where: { id },
      });
    } catch (error) {
      logger.error(`Error getting user with id ${id}:`, error);
      throw new Error("Could not retrieve user");
    }
  }

  static async getUserByEmail(email: string): Promise<User | null> {
    try {
      return await prisma.user.findUnique({
        where: { email },
      });
    } catch (error) {
      logger.error(`Error getting user with email ${email}:`, error);
      throw new Error("Could not retrieve user");
    }
  }

  static async updateUser(
    id: string,
    name: string,
    email: string
  ): Promise<User> {
    try {
      return await prisma.user.update({
        where: { id },
        data: { name, email },
      });
    } catch (error) {
      logger.error(`Error updating user with id ${id}:`, error);
      throw new Error("Could not update user");
    }
  }

  static async deleteUser(id: string): Promise<User> {
    try {
      return await prisma.user.delete({
        where: { id },
      });
    } catch (error) {
      logger.error(`Error deleting user with id ${id}:`, error);
      throw new Error("Could not delete user");
    }
  }
}

export default UserModel;
