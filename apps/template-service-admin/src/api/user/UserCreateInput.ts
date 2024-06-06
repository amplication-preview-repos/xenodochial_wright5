import { ImageCreateNestedManyWithoutUsersInput } from "./ImageCreateNestedManyWithoutUsersInput";
import { ProjectCreateNestedManyWithoutUsersInput } from "./ProjectCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { TemplateCreateNestedManyWithoutUsersInput } from "./TemplateCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  images?: ImageCreateNestedManyWithoutUsersInput;
  lastName?: string | null;
  password: string;
  projects?: ProjectCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  templates?: TemplateCreateNestedManyWithoutUsersInput;
  username: string;
};
