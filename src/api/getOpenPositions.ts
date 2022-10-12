import type { AxiosResponse } from "axios";

import { GetListItemTypes } from "../types/getListItemTypes";
import { ajax } from "../utils/ajax";

export const getOpenPositions = async (): Promise<
  AxiosResponse<GetListItemTypes[]>
> => {
  return (await ajax.get("/positions")).data;
};
