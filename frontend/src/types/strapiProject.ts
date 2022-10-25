import { StrapiImage } from "./strapiImage";
import { StrapiListItem } from "./strapiListItem";
import { StrapiProjectGridItem } from "./strapiProjectGridItem";

export interface StrapiProject {
  URL: string;
  company: string;
  title: string;
  projects: {
    data: Array<{
      attributes: StrapiProjectGridItem;
      id: number;
    }>;
  };
  project_image: Array<{
    colStart: number;
    colEnd: number;
    rowStart: number;
    rowEnd: number;
    id: number;
    featured_image: StrapiImage;
  }>;
  services: StrapiListItem[];
}
