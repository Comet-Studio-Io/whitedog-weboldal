import { StrapiImage } from "./strapiImage";
import { StrapiListItem } from "./strapiListItem";
import { StrapiProjectGridItem } from "./strapiProjectGridItem";

export interface GetProjectTypes {
  attributes: {
    createdAt: string;
    data: {
      details: {
        tags: string[];
        title: string;
        company: string;
      };
      ListItem: Array<{
        id: number;
        data: StrapiListItem;
      }>;
      RelatedProjects: Array<{
        id: number;
        data: StrapiProjectGridItem;
        image: StrapiImage;
      }>;
      ProjectGridItem: Array<{
        id: number;
        data: StrapiProjectGridItem;
        image: StrapiImage;
      }>;
    };

    locale: string;
    publishedAt: string;
    updatedAt: string;
  };
  id: number;
}
