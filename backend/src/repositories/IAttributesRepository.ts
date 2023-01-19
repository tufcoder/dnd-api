import { Attribute } from "../model/Attribute";

export interface ICreateAttributeDTO {
  maximum_attributes: number;
  minimal_score: number;
  rule: string;
}

export interface IAttributesRepository {
  create({
    maximum_attributes,
    minimal_score,
    rule,
  }: ICreateAttributeDTO): Attribute;
  getAll(): Attribute[];
}
