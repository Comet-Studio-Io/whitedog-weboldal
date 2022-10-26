import { StrapiFilter } from "./strapiFilter";
import { StrapiImage } from "./strapiImage";
import { StrapiCategory } from "./strapiRelatedItem";

export interface StrapiProjectGridItem {
  title: string;
  project_categories: StrapiCategory;
  featured_image: StrapiImage;
  project_filter: StrapiFilter;
  colStart: number;
  colEnd: number;
  rowStart: number;
  rowEnd: number;
}
