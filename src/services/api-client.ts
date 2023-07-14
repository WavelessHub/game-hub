import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "6683a0e6954c4a6a998d921074cb854d",
  },
});
