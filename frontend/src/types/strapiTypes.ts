import { StrapiBaseTypes } from "./strapiBaseTypes";

export interface StrapiTypes<T> {
  attributes: T & StrapiBaseTypes;
  id: number;
}
