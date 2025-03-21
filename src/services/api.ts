import axios from "axios";

export const api = axios.create({
  baseURL: "https://food-explorer-api-ypvr.onrender.com",
  withCredentials: true
});