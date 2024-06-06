import { Image } from "../image/Image";
import { Project } from "../project/Project";
import { JsonValue } from "type-fest";
import { Template } from "../template/Template";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  images?: Array<Image>;
  lastName: string | null;
  projects?: Array<Project>;
  roles: JsonValue;
  templates?: Array<Template>;
  updatedAt: Date;
  username: string;
};
