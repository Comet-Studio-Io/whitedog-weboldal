import { ProjectFilterTypes } from "./projectFilterTypes";
import { StrapiBaseTypes } from "./strapiBaseTypes";

export interface StrapiFilter {
  data: {
    attributes: {
      filter_name: ProjectFilterTypes;
    } & StrapiBaseTypes;
    id: number;
  };
}
