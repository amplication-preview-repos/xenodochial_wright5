import { GeneratedTemplate } from "../generatedTemplate/GeneratedTemplate";
import { Project } from "../project/Project";
import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type Template = {
  createdAt: Date;
  generatedTemplates?: Array<GeneratedTemplate>;
  id: string;
  project?: Project | null;
  templateData: JsonValue;
  templateName: string | null;
  templateSize: string | null;
  templateUuid: string | null;
  thumbnail: JsonValue;
  updatedAt: Date;
  user?: User | null;
};
