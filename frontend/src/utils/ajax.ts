import axios from "axios";

const axiosHeaders = {
  Authorization: process.env.NEXT_PUBLIC_API_TOKEN,
};

const apiBaseUrl = `${
  process.env.NEXT_PUBLIC_API_URL ?? "https://whitedog-weboldal.herokuapp.com"
}/api/`;
const apiParams = { populate: "*" };

export const ajax = axios.create({
  withCredentials: true,
  baseURL: apiBaseUrl,
  headers: axiosHeaders,
  params: apiParams,
});
