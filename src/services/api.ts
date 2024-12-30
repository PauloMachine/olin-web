import axios from "axios";
import { getCookie, removeCookie } from "src/features/auth/cookies";

const api = axios.create({
  baseURL: process.env.REACT_APP_OLIN_API_URL,
});

api.interceptors.request.use((config) => {
  const token = getCookie("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      removeCookie("token");
      removeCookie("user");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default api;
