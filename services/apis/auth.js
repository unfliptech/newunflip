import { useNuxtApp } from "#app";

export const getOtp = async ({ phone }) => {
  const { $apiClient } = useNuxtApp();

  try {
    // Ensure the phone is being sent as a direct property
    const response = await $apiClient.post("/api/auth/get-otp", { phone });
    return response.data;
  } catch (error) {
    console.error("Error getting OTP:", error);
    throw error;
  }
};

export const verifyOtp = async (phone, otp) => {
  const { $apiClient } = useNuxtApp();

  try {
    const response = await $apiClient.post("/api/auth", {
      phone,
      otp,
    });
    return response.data;
  } catch (error) {
    console.error("Error verifying OTP:", error);
    throw error;
  }
};
