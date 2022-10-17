import { StrapiImage } from "./strapiImage";
import { StrapiProjectGridItem } from "./strapiProjectGridItem";

export interface GetProjectsTypes {
  attributes: {
    createdAt: string;
    ProjectGridItem: {
      id: number;
      data: StrapiProjectGridItem;
      image: StrapiImage;
    };
    locale: string;
    publishedAt: string;
    updatedAt: string;
  };
  id: number;
}
