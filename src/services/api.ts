import axios from "axios";

export const api = axios.create({
  baseURL: "https://food-explorer-api-yug9.onrender.com",
  withCredentials: true
});