import { StrapiListItem } from "./strapiListItem";

export interface GetListItemTypes {
  attributes: {
    data: StrapiListItem;
    createdAt: string;
    publishedAt: string;
    updatedAt: string;
  };
  id: number;
}
