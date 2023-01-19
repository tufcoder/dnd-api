import { AppError } from "../errors/AppError";
import { IAttributesRepository } from "../repositories/IAttributesRepository";

interface IRequest {
  maximum_attributes: number;
  minimal_score: number;
  rule: string;
}

export class CreateAttributeService {
  constructor(private attributesRepository: IAttributesRepository) {}

  execute({ maximum_attributes, minimal_score, rule }: IRequest) {
    if (maximum_attributes < 1 || maximum_attributes > 6) {
      throw new AppError("Maximum attributes must be between 1 and 6");
    }

    if (minimal_score < 3 || minimal_score > 18) {
      throw new AppError("Minimal score must be between 3 and 18");
    }

    return this.attributesRepository.create({
      maximum_attributes,
      minimal_score,
      rule,
    });
  }
}
