import { JsonValue } from "type-fest";
import { Template } from "../template/Template";

export type GeneratedTemplate = {
  createdAt: Date;
  generatedImage: JsonValue;
  id: string;
  requestData: JsonValue;
  template?: Template | null;
  updatedAt: Date;
};
