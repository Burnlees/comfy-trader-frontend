import axios from "axios";

const comfy = axios.create({
  baseURL: "api.comfytrader.net",
  headers: {
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": true,
  },
});

comfy.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("x-token")}`;
  return config;
});

export default comfy;
