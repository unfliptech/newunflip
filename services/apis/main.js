// services/apis/main.js
import { useNuxtApp } from "#app";

export const globalValidation = async () => {
  const { $apiClient } = useNuxtApp();

  try {
    const response = await $apiClient.post("/api/global-validation");
    return response.data;
  } catch (error) {
    console.error("Error during global validation:", error);
    throw error;
  }
};
