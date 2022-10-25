import type { AxiosResponse } from "axios";

import { StrapiListItem } from "../types/strapiListItem";
import { StrapiTypes } from "../types/strapiTypes";
import { ajax } from "../utils/ajax";

export const getServices = async (): Promise<
  AxiosResponse<Array<StrapiTypes<StrapiListItem>>>
> => {
  return (await ajax.get("/services")).data;
};
