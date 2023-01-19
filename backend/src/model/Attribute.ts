import { v4 as uuidV4 } from "uuid";

export class Attribute {
  id?: string;
  rule: string;
  attributes: number[];
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
