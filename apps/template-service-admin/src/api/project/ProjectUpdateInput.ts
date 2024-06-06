import { InputJsonValue } from "../../types";
import { TemplateUpdateManyWithoutProjectsInput } from "./TemplateUpdateManyWithoutProjectsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProjectUpdateInput = {
  logo?: InputJsonValue;
  name?: string | null;
  templates?: TemplateUpdateManyWithoutProjectsInput;
  user?: UserWhereUniqueInput | null;
};
