import { useQuery } from "react-query";

import { getServices } from "../api/getServices";
import { GetListItemTypes } from "../types/getListItemTypes";

export const useGetServices = (): {
  data: GetListItemTypes[] | undefined;
  status: "idle" | "error" | "loading" | "success";
} => {
  const { data, status } = useQuery("services", async () => {
    const response = await getServices();

    return response.data;
  });

  return { data, status };
};
