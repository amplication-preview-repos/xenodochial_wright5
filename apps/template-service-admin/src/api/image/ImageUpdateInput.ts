import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ImageUpdateInput = {
  imageUrl?: InputJsonValue;
  user?: UserWhereUniqueInput | null;
};
