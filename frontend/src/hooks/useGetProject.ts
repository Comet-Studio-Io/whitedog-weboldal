import {
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
  useQuery,
} from "react-query";

import { getProject } from "../api/getProject";
import { GetProjectTypes } from "../types/getProjectTypes";

export const useGetProject = (
  project: string,
): {
  data: GetProjectTypes | undefined;
  status: "idle" | "error" | "loading" | "success";
  fetch: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined,
  ) => Promise<QueryObserverResult<GetProjectTypes, unknown>>;
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
