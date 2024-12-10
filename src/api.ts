import axios from 'axios';

const comfy = axios.create({
  baseURL: "http://35.179.183.99:80",
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
  