import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ImageWhereInput = {
  id?: StringFilter;
  imageUrl?: JsonFilter;
  user?: UserWhereUniqueInput;
};
