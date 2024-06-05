import logger from "@server/libs/winston-logger";
import type { Request, Response, NextFunction } from "express";

const errorMiddleware = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.error(`${req.method} ${req.url} - ${err.message}`);

  res.status(500).json({
    message: "An internal server error occurred",
    error: err.message,
  });
};

export default errorMiddleware;
