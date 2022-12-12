import { StrapiFilter } from "./strapiFilter";
import { StrapiImage } from "./strapiImage";
import { StrapiCategory } from "./strapiRelatedItem";
import { StrapiProjectDetail } from "./StrapiProjectDetail";

export interface StrapiProjectGridItem {
  title: string;
  project_categories: StrapiCategory;
  featured_image: StrapiImage;
  project_filter: StrapiFilter;
  project_detail: StrapiProjectDetail;
  colStart: number;
  colEnd: number;
  rowStart: number;
  rowEnd: number;
}
