import { useQuery } from "react-query";

import { getProjects } from "../api/getProjects";
import { GetProjectsTypes } from "../types/getProjectsTypes";

export const useGetProjects = (): {
  data: GetProjectsTypes[] | undefined;
  status: "idle" | "error" | "loading" | "success";
} => {
  const { data, status } = useQuery("projects", async () => {
    const response = await getProjects();

    return response.data;
  });

  return { data, status };
};
