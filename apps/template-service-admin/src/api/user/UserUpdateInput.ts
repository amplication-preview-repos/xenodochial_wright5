import { ImageUpdateManyWithoutUsersInput } from "./ImageUpdateManyWithoutUsersInput";
import { ProjectUpdateManyWithoutUsersInput } from "./ProjectUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { TemplateUpdateManyWithoutUsersInput } from "./TemplateUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  images?: ImageUpdateManyWithoutUsersInput;
  lastName?: string | null;
  password?: string;
  projects?: ProjectUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  templates?: TemplateUpdateManyWithoutUsersInput;
  username?: string;
};
