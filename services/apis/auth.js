// services/apis/auth.js
import { useNuxtApp } from "#app";

export const getOtp = async (phone) => {
  const { $apiClient } = useNuxtApp();

  try {
    const response = await $apiClient.post("/api/auth/get-otp", { phone });
    return response.data;
  } catch (error) {
    console.error("Error getting OTP:", error);
    throw error;
  }
};
