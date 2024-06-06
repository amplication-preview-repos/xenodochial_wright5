import { Image as TImage } from "../api/image/Image";

export const IMAGE_TITLE_FIELD = "id";

export const ImageTitle = (record: TImage): string => {
  return record.id?.toString() || String(record.id);
};
