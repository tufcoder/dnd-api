import { NextFunction, Request, Response, Router } from "express";

import "express-async-errors";
import { AppError } from "../errors/AppError";

export const errorsRoutes = Router();

errorsRoutes.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        message: error.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${error.message}`,
    });
  }
);
