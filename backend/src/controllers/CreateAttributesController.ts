import { Request, Response } from "express";

import { CreateAttributeService } from "../services/CreateAttributeService";

export class CreateAttributesController {
  constructor(private createAttributeService: CreateAttributeService) {}

  handle(request: Request, response: Response): Response {
    try {
      const { maximum_attributes, minimal_score } = request.body;

      const attribute = this.createAttributeService.execute({
        maximum_attributes,
        minimal_score,
        rule: request.url.replace("/", ""),
      });

      return response.status(201).json(attribute);
    } catch (error) {
      return response.status(500).send({
        error: error.message,
      });
    }
  }
}
