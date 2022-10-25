import type { AxiosResponse } from "axios";

import { StrapiProjectGridItem } from "../types/strapiProjectGridItem";
import { StrapiTypes } from "../types/strapiTypes";
import { ajax } from "../utils/ajax";

export const getProjects = async (): Promise<
  AxiosResponse<Array<StrapiTypes<StrapiProjectGridItem>>>
> => {
  return (await ajax.get("/projects")).data;
};
