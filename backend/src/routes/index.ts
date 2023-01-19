import { Router } from "express";

import { attributesRoutes } from "./attributes.routes";
import { rootRoutes } from "./root.routes";

export const routes = Router();

routes.use("/", rootRoutes);
routes.use("/attributes", attributesRoutes);
