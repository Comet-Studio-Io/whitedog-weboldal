import type { AxiosResponse } from "axios";

import { StrapiNews } from "../types/strapiNews";
import { StrapiTypes } from "../types/strapiTypes";
import { ajax } from "../utils/ajax";

export const getNews = async (): Promise<
  AxiosResponse<StrapiTypes<StrapiNews[]>>
> => {
  return (await ajax.get("/news")).data;
};
