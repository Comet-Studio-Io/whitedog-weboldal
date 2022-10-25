import { useQuery } from "react-query";

import { getNews } from "../api/getNews";
import { StrapiNews } from "../types/strapiNews";
import { StrapiTypes } from "../types/strapiTypes";

export const useGetNews = (): {
  data: StrapiTypes<StrapiNews[]> | undefined;
  status: "idle" | "error" | "loading" | "success";
} => {
  const { data, status } = useQuery("news", async () => {
    const response = await getNews();

    return response.data;
  });

  return { data, status };
};
