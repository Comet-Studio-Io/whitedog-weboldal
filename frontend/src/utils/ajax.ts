import axios from "axios";

const axiosHeaders = {
  Authorization:
    "bearer 9fdca53e142a3ca30a947425fb7a47ebbd4ef94116ee205951a5c272ec50b28b2b853f0f069f39e571b9d58c9a7fbad0d90cde84c9c440193fe1a22a435a4cf3806f646f6bf0aa5b4b68ab4878c96e4e7ef73b2e572da32b1543d4f8240f390fabe20195693a8fafda24bca6718f1213a4d8195595f73953d03fa660f656f6b3",
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
