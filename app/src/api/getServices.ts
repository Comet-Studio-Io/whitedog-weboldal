import type { AxiosResponse } from "axios";

import { GetListItemTypes } from "../types/getListItemTypes";
import { ajax } from "../utils/ajax";

export const getServices = async (): Promise<
  AxiosResponse<GetListItemTypes[]>
> => {
  return (await ajax.get("/services")).data;
};
