import { StrapiImage } from "./strapiImage";
import { StrapiProjectGridItem } from "./strapiProjectGridItem";

export interface GetProjectTypes {
  attributes: {
    createdAt: string;
    data: {
      tags: string[];
      title: string;
      company: string;
    };
    list: Array<{
      id: number;
      __component: string;
      data: {
        title: string;
        data: string;
      };
    }>;
    relatedProjects: Array<{
      id: number;
      data: StrapiProjectGridItem;
      image: StrapiImage;
    }>;
    ProjectGridItem: Array<{
      id: number;
      data: StrapiProjectGridItem;
      image: StrapiImage;
    }>;
    image: StrapiImage;
    locale: string;
    publishedAt: string;
    updatedAt: string;
  };
  id: number;
}
