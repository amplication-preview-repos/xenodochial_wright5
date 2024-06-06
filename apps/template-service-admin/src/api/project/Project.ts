import { JsonValue } from "type-fest";
import { Template } from "../template/Template";
import { User } from "../user/User";

export type Project = {
  createdAt: Date;
  id: string;
  logo: JsonValue;
  name: string | null;
  templates?: Array<Template>;
  updatedAt: Date;
  user?: User | null;
};
