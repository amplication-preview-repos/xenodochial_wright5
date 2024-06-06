import { DefaultTemplate as TDefaultTemplate } from "../api/defaultTemplate/DefaultTemplate";

export const DEFAULTTEMPLATE_TITLE_FIELD = "planName";

export const DefaultTemplateTitle = (record: TDefaultTemplate): string => {
  return record.planName?.toString() || String(record.id);
};
