import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type DefaultTemplateWhereInput = {
  duration?: IntNullableFilter;
  id?: StringFilter;
  planName?: StringNullableFilter;
  price?: FloatNullableFilter;
};
