import logger from "@server/libs/winston-logger";
import { type Response } from "express";
import { z } from "zod";

// Helper function to handle server errors
export function handleServerError(res: Response, error: Error | any) {
  logger.error(`Server error: ${error.message}`);
  res.status(500).json({ message: error.message || "Internal server Error" });
}

// Helper function to handle validation errors
export function handleValidationError(res: Response, error: Error | any) {
  if (error instanceof z.ZodError) {
    res.status(400).json({ message: "Validation error", errors: error.errors });
  } else {
    handleServerError(res, error);
  }
}
