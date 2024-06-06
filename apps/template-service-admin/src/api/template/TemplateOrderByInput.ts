import { SortOrder } from "../../util/SortOrder";

export type TemplateOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  projectId?: SortOrder;
  templateData?: SortOrder;
  templateName?: SortOrder;
  templateSize?: SortOrder;
  templateUuid?: SortOrder;
  thumbnail?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
