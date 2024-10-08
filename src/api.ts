import axios from 'axios';

const comfy = axios.create({
  baseURL: "https://normal-ibex-safely.ngrok-free.app",
  headers: {
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": true
  },
});

comfy.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("x-token")}`;
  return config;
});

export default comfy;
  