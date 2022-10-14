import axios from "axios";

const axiosHeaders = {
  Authorization:
    "bearer 65178da1b03cd9907d4fa9f5c1b6de0ecf742a401197beac1c85017d29c17485147fd49ce07683840d5503aa022031cb38229213c7e4ea8e9ff5a606aff4f0b9a446841e1cff3300090dfc414f17767cfb61062c2f7bc2f5ea116c19afb70d02540c0c63280751b965b0577f8c4eec88342b6ea17e983beac92fac7cb826f558",
};

const apiBaseUrl = `${
  process.env.NEXT_PUBLIC_API_URL ?? "localhost:1337"
}/api/`;
const apiParams = { populate: "*" };

export const ajax = axios.create({
  withCredentials: true,
  baseURL: apiBaseUrl,
  headers: axiosHeaders,
  params: apiParams,
});
