import { Attribute } from "../../model/Attribute";
import { Score } from "../../model/Score";
import {
  IAttributesRepository,
  ICreateAttributeDTO,
} from "../IAttributesRepository";

export class AttributesRepository implements IAttributesRepository {
  private attributes: Attribute[];
  private static INSTANCE = new AttributesRepository();

  private constructor() {
    this.attributes = [];
  }

  public static getInstance(): AttributesRepository {
    if (!this.INSTANCE) {
      this.INSTANCE = new AttributesRepository();
    }

    return this.INSTANCE;
  }

  create({
    maximum_attributes,
    minimal_score,
    rule,
  }: ICreateAttributeDTO): Attribute {
    const attribute = new Attribute();
    const score = new Score(minimal_score, rule);

    Object.assign(attribute, {
      rule,
      attributes: score.getScores(maximum_attributes),
      created_at: new Date(),
    });

    this.attributes.push(attribute);

    return attribute;
  }

  getAll(): Attribute[] {
    return this.attributes;
  }
}
