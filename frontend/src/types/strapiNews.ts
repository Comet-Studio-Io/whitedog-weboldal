import { StrapiImage } from "./strapiImage";
import { StrapiCategory } from "./strapiRelatedItem";

export interface StrapiNews {
  Title: string;
  Date: string;
  Url: string;
  featured_image: StrapiImage;
  news_categories: StrapiCategory;
}
