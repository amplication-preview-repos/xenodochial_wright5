import { GeneratedTemplateListRelationFilter } from "../generatedTemplate/GeneratedTemplateListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TemplateWhereInput = {
  generatedTemplates?: GeneratedTemplateListRelationFilter;
  id?: StringFilter;
  project?: ProjectWhereUniqueInput;
  templateData?: JsonFilter;
  templateName?: StringNullableFilter;
  templateSize?: StringNullableFilter;
  templateUuid?: StringNullableFilter;
  thumbnail?: JsonFilter;
  user?: UserWhereUniqueInput;
};
