import { config } from "dotenv";
import express from "express";
import swagger from "swagger-ui-express";

import "express-async-errors";
import { getError } from "./middlewares/errors";
import { routes } from "./routes";
import swaggerFile from "./swagger.json";

config({ path: "./.env" });

const PORT = Number(process.env.PORT) || 1337;

const app = express();

app.use(express.json());

app.use("/api", swagger.serve, swagger.setup(swaggerFile));

app.use(getError);

app.use(routes);

app.listen(PORT, () => console.log("Server is running!"));
