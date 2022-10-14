import type { AxiosResponse } from "axios";

import { GetNewsTypes } from "../types/getNewsTypes";
import { ajax } from "../utils/ajax";

export const getNews = async (): Promise<AxiosResponse<GetNewsTypes[]>> => {
  return (await ajax.get("/news")).data;
};
