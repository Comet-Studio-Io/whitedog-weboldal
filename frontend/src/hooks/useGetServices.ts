import { useQuery } from "react-query";

import { getServices } from "../api/getServices";
import { StrapiListItem } from "../types/strapiListItem";
import { StrapiTypes } from "../types/strapiTypes";

export const useGetServices = (): {
  data: Array<StrapiTypes<StrapiListItem>> | undefined;
  status: "idle" | "error" | "loading" | "success";
} => {
  const { data, status } = useQuery("services", async () => {
    const response = await getServices();

    return response.data;
  });

  return { data, status };
};
