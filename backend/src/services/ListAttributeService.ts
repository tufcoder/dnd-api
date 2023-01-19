import { IAttributesRepository } from "../repositories/IAttributesRepository";

export class ListAttributeService {
  constructor(private attributesRepository: IAttributesRepository) {}

  execute() {
    return this.attributesRepository.getAll();
  }
}
