import { StrapiImage } from "./strapiImage";
import { StrapiCategory } from "./strapiRelatedItem";

export interface StrapiProjectGridItem {
  title: string;
  project_categories: StrapiCategory;
  featured_image: StrapiImage;
  colStart: number;
  colEnd: number;
  rowStart: number;
  rowEnd: number;
}
