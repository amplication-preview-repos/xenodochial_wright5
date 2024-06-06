import { SortOrder } from "../../util/SortOrder";

export type ImageOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  imageUrl?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
