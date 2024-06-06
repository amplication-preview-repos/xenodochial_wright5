import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type SubscriptionPlanWhereInput = {
  height?: IntNullableFilter;
  id?: StringFilter;
  jsonPath?: StringNullableFilter;
  previewPath?: StringNullableFilter;
  width?: IntNullableFilter;
};
