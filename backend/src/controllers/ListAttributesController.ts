import { Request, Response } from "express";

import { ListAttributeService } from "../services/ListAttributeService";

export class ListAttributesController {
  constructor(private listAttributeService: ListAttributeService) {}

  handle(request: Request, response: Response): Response {
    try {
      const attributes = this.listAttributeService.execute();

      if (attributes.length <= 0) {
        return response.status(404).send();
      }

      return response.status(200).json(attributes);
    } catch (error) {
      return response.status(error.statusCode).send({
        error: error.message,
      });
    }
  }
}
