import { Router } from "express";

import {
  createAttributesController,
  listAttributesController,
} from "../controllers";

export const attributesRoutes = Router();

attributesRoutes.post("/4d6", (request, response) => {
  return createAttributesController.handle(request, response);
});

attributesRoutes.post("/1d10plus8", (request, response) => {
  return createAttributesController.handle(request, response);
});

attributesRoutes.post("/1d8plus10", (request, response) => {
  return createAttributesController.handle(request, response);
});

attributesRoutes.post("/3d6", (request, response) => {
  return createAttributesController.handle(request, response);
});

attributesRoutes.get("/history", (request, response) => {
  return listAttributesController.handle(request, response);
});
