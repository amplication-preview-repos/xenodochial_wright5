import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TemplateListRelationFilter } from "../template/TemplateListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProjectWhereInput = {
  id?: StringFilter;
  logo?: JsonFilter;
  name?: StringNullableFilter;
  templates?: TemplateListRelationFilter;
  user?: UserWhereUniqueInput;
};
