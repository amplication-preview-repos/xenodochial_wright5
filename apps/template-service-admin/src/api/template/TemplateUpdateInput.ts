import { GeneratedTemplateUpdateManyWithoutTemplatesInput } from "./GeneratedTemplateUpdateManyWithoutTemplatesInput";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TemplateUpdateInput = {
  generatedTemplates?: GeneratedTemplateUpdateManyWithoutTemplatesInput;
  project?: ProjectWhereUniqueInput | null;
  templateData?: InputJsonValue;
  templateName?: string | null;
  templateSize?: string | null;
  templateUuid?: string | null;
  thumbnail?: InputJsonValue;
  user?: UserWhereUniqueInput | null;
};
