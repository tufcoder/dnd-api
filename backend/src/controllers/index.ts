import { AttributesRepository } from "../repositories/implementations/AttributesRepository";
// import { PostgresAttributesRepository } from "../repositories/implementations/PostgresAttributesRepository";
//
import { CreateAttributeService } from "../services/CreateAttributeService";
import { ListAttributeService } from "../services/ListAttributeService";
//
import { CreateAttributesController } from "./CreateAttributesController";
import { ListAttributesController } from "./ListAttributesController";
import { ListRootController } from "./ListRootController";

const attributesRepository = AttributesRepository.getInstance();
// const postgresAttributesRepository = PostgresAttributesRepository.getInstance();

const createAttributeService = new CreateAttributeService(attributesRepository);

const listAttributeService = new ListAttributeService(attributesRepository);

export const createAttributesController = new CreateAttributesController(
  createAttributeService
);

export const listAttributesController = new ListAttributesController(
  listAttributeService
);

export const listRootController = new ListRootController();
