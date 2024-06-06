import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ImageListRelationFilter } from "../image/ImageListRelationFilter";
import { ProjectListRelationFilter } from "../project/ProjectListRelationFilter";
import { TemplateListRelationFilter } from "../template/TemplateListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  images?: ImageListRelationFilter;
  lastName?: StringNullableFilter;
  projects?: ProjectListRelationFilter;
  templates?: TemplateListRelationFilter;
  username?: StringFilter;
};
