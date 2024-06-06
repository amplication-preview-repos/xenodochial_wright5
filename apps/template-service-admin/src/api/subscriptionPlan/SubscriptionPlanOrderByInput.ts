import { SortOrder } from "../../util/SortOrder";

export type SubscriptionPlanOrderByInput = {
  createdAt?: SortOrder;
  height?: SortOrder;
  id?: SortOrder;
  jsonPath?: SortOrder;
  previewPath?: SortOrder;
  updatedAt?: SortOrder;
  width?: SortOrder;
};
