import { useQuery } from "react-query";

import { getProjects } from "../api/getProjects";
import { StrapiProjectGridItem } from "../types/strapiProjectGridItem";
import { StrapiTypes } from "../types/strapiTypes";

export const useGetProjects = (): {
  data: Array<StrapiTypes<StrapiProjectGridItem>> | undefined;
  status: "idle" | "error" | "loading" | "success";
} => {
  const { data, status } = useQuery("projects", async () => {
    const response = await getProjects();
    return response.data;
  });

  return { data, status };
};
