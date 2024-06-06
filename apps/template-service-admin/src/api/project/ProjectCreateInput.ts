import { InputJsonValue } from "../../types";
import { TemplateCreateNestedManyWithoutProjectsInput } from "./TemplateCreateNestedManyWithoutProjectsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProjectCreateInput = {
  logo?: InputJsonValue;
  name?: string | null;
  templates?: TemplateCreateNestedManyWithoutProjectsInput;
  user?: UserWhereUniqueInput | null;
};
