import { InputJsonValue } from "../../types";
import { TemplateWhereUniqueInput } from "../template/TemplateWhereUniqueInput";

export type GeneratedTemplateUpdateInput = {
  generatedImage?: InputJsonValue;
  requestData?: InputJsonValue;
  template?: TemplateWhereUniqueInput | null;
};
