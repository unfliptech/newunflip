import axios from "axios";

export default defineNuxtPlugin((nuxtApp) => {
  const apiClient = axios.create({
    baseURL: "https://lazeezbox.com", // Replace with your API URL
    headers: {
      "Content-Type": "application/json",
      "X-Client-ID": "69998ec7-7ce1-4b36-ab7d-248329edf532", // Replace with your actual client ID
      "X-Client-Secret": "bBA6mB9qq13HJVbayyGcfb0yP1mTpszk", // Replace with your actual client secret
    },
    withCredentials: true, // Ensure cookies are sent with requests
  });

  // Attach the client to the Nuxt app, so it can be accessed globally
  nuxtApp.provide("apiClient", apiClient);

  // You can also add interceptors for request and response handling
  apiClient.interceptors.request.use(
    (config) => {
      // Modify the request config if needed
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  apiClient.interceptors.response.use(
    (response) => {
      // Handle responses
      return response;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
});
