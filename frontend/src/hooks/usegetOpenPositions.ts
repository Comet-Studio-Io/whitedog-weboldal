import { useQuery } from "react-query";

import { getOpenPositions } from "../api/getOpenPositions";
import { StrapiListItem } from "../types/strapiListItem";
import { StrapiTypes } from "../types/strapiTypes";

export const useGetOpenPositions = (): {
  data: Array<StrapiTypes<StrapiListItem>> | undefined;
  status: "idle" | "error" | "loading" | "success";
} => {
  const { data, status } = useQuery("positions", async () => {
    const response = await getOpenPositions();

    return response.data;
  });

  return { data, status };
};
