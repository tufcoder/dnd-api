import { Request, Response } from "express";

export class ListRootController {
  handle(request: Request, response: Response): Response {
    try {
      return response.status(200).json({ message: "ok" });
    } catch (error) {
      return response.status(error.statusCode).send({
        error: error.message,
      });
    }
  }
}
