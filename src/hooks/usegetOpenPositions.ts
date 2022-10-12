import { useQuery } from "react-query";

import { getOpenPositions } from "../api/getOpenPositions";
import { GetListItemTypes } from "../types/getListItemTypes";

export const useGetOpenPositions = (): {
  data: GetListItemTypes[] | undefined;
  status: "idle" | "error" | "loading" | "success";
} => {
  const { data, status } = useQuery("positions", async () => {
    const response = await getOpenPositions();

    return response.data;
  });

  return { data, status };
};
