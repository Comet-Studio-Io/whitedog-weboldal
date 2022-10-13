import type { AxiosResponse } from "axios";

import { GetProjectTypes } from "../types/getProjectTypes";
import { ajax } from "../utils/ajax";

export const getProject = async (
  project: string,
): Promise<AxiosResponse<GetProjectTypes>> => {
  return (
    await ajax.get(
      `${project}-project?populate[relatedProjects][populate]=*&populate[ProjectGridItem][populate]=*`,
    )
  ).data;
};
