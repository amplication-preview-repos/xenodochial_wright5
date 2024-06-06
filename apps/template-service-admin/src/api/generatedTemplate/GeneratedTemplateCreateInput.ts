import { InputJsonValue } from "../../types";
import { TemplateWhereUniqueInput } from "../template/TemplateWhereUniqueInput";

export type GeneratedTemplateCreateInput = {
  generatedImage?: InputJsonValue;
  requestData?: InputJsonValue;
  template?: TemplateWhereUniqueInput | null;
};
