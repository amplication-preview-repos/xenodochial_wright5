import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ImageCreateInput = {
  imageUrl?: InputJsonValue;
  user?: UserWhereUniqueInput | null;
};
