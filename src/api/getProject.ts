import type { AxiosResponse } from "axios";

import { GetProjectTypes } from "../types/getProjectTypes";
import { ajax } from "../utils/ajax";

export const getProject = async (
  project: string,
): Promise<AxiosResponse<GetProjectTypes>> => {
  return (
    await ajax.get(
      `${project}-project?populate[0]=data.ProjectGridItem.image&populate[1]=data.ListItem&populate[2]=data.RelatedProjects.image`,
    )
  ).data;
};
