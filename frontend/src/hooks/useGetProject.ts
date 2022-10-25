import {
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
  useQuery,
} from "react-query";

import { getProject } from "../api/getProject";
import { StrapiProject } from "../types/strapiProject";
import { StrapiTypes } from "../types/strapiTypes";

export const useGetProject = (
  project: string,
): {
  data: StrapiTypes<StrapiProject> | undefined;
  status: "idle" | "error" | "loading" | "success";
  fetch: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined,
  ) => Promise<QueryObserverResult<StrapiTypes<StrapiProject>, unknown>>;
} => {
  const {
    data,
    status,
    refetch: fetch,
  } = useQuery(
    "project",
    async () => {
      const response = await getProject(project);

      return response.data;
    },
    {
      enabled: false,
    },
  );

  return { data, status, fetch };
};
