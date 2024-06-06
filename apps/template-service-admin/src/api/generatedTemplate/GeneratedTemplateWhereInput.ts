import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { TemplateWhereUniqueInput } from "../template/TemplateWhereUniqueInput";

export type GeneratedTemplateWhereInput = {
  generatedImage?: JsonFilter;
  id?: StringFilter;
  requestData?: JsonFilter;
  template?: TemplateWhereUniqueInput;
};
