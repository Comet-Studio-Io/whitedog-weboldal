import type { AxiosResponse } from "axios";

import { StrapiProject } from "../types/strapiProject";
import { StrapiTypes } from "../types/strapiTypes";
import { ajax } from "../utils/ajax";

export const getProject = async (
  project: string,
): Promise<AxiosResponse<StrapiTypes<StrapiProject>>> => {
  return (
    await ajax.get(
      `slugify/slugs/project-detail/${project}?populate[0]=projects.featured_image&populate[1]=projects.project_categories&populate[2]=project_image.featured_image&populate[3]=services`,
    )
  ).data;
};
