import { StrapiImage } from "./strapiImage";

export interface GetNewsTypes {
  attributes: {
    data: {
      title: string;
      date: string;
      filter: string;
    };
    image: StrapiImage;
    createdAt: string;
    publishedAt: string;
    updatedAt: string;
  };
  id: number;
}
