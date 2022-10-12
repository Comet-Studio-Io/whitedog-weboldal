import type { AxiosResponse } from "axios";

import { GetProjectsTypes } from "../types/getProjectsTypes";
import { ajax } from "../utils/ajax";

export const getProjects = async (): Promise<
  AxiosResponse<GetProjectsTypes[]>
> => {
  return (await ajax.get("/projects")).data;
};
