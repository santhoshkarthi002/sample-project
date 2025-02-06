/* eslint-disable @typescript-eslint/no-explicit-any */

import axios from "axios";


// Create Axios instance
export const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
});

// Request Interceptor
axiosInstance.interceptors.request.use(
  async (config: any) => {
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

// Response Interceptor
axiosInstance.interceptors.response.use(
  async (response: any) => {
    return response;
  },
  async (error: any) => {
    throw error;
  }
);
