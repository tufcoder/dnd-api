import { Router } from "express";

import { listRootController } from "../controllers";

export const rootRoutes = Router();

rootRoutes.get("/", (request, response) => {
  return listRootController.handle(request, response);
});
