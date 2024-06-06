import { GeneratedTemplate as TGeneratedTemplate } from "../api/generatedTemplate/GeneratedTemplate";

export const GENERATEDTEMPLATE_TITLE_FIELD = "id";

export const GeneratedTemplateTitle = (record: TGeneratedTemplate): string => {
  return record.id?.toString() || String(record.id);
};
