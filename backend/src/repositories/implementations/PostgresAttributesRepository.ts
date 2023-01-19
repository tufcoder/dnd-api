import { AppError } from "../../errors/AppError";
import { Attribute } from "../../model/Attribute";
import {
  IAttributesRepository,
  ICreateAttributeDTO,
} from "../IAttributesRepository";

export class PostgresAttributesRepository implements IAttributesRepository {
  private List: [];
  private static INSTANCE = new PostgresAttributesRepository();

  private constructor() {
    this.List = [];
  }

  public static getInstance(): PostgresAttributesRepository {
    if (!this.INSTANCE) {
      this.INSTANCE = new PostgresAttributesRepository();
    }

    return this.INSTANCE;
  }

  create({
    maximum_attributes,
    minimal_score,
    rule,
  }: ICreateAttributeDTO): Attribute {
    console.log(maximum_attributes, minimal_score, rule);
    throw new AppError("Method not implemented.");
  }
  getAll(): Attribute[] {
    console.log("getAll method");
    throw new AppError("Method not implemented.");
  }
}
