import { useQuery } from "react-query";

import { getNews } from "../api/getNews";
import { GetNewsTypes } from "../types/getNewsTypes";

export const useGetNews = (): {
  data: GetNewsTypes[] | undefined;
  status: "idle" | "error" | "loading" | "success";
} => {
  const { data, status } = useQuery("news", async () => {
    const response = await getNews();

    return response.data;
  });

  return { data, status };
};
