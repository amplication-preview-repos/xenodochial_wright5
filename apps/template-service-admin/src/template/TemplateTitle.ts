import { Template as TTemplate } from "../api/template/Template";

export const TEMPLATE_TITLE_FIELD = "templateName";

export const TemplateTitle = (record: TTemplate): string => {
  return record.templateName?.toString() || String(record.id);
};
