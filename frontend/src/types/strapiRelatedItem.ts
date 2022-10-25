import { StrapiBaseTypes } from "./strapiBaseTypes";

export interface StrapiCategory {
  data: Array<{
    attributes: {
      name: string;
    } & StrapiBaseTypes;
    id: number;
  }>;
}
