import { defineStore } from "pinia";
import { getOtp, verifyOtp } from "~/services/apis/auth";
import { globalValidation } from "~/services/apis/main"; // Import from main.js

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    is_login: false,
    phone: "",
  }),
  actions: {
    async getOtp(phone) {
      try {
        // Ensure the phone is passed directly
        await getOtp({ phone });
        this.phone = phone;
        this.is_login = false;
      } catch (error) {
        throw error;
      }
    },
    async verifyOtp(otp) {
      try {
        const response = await verifyOtp(this.phone, otp);
        this.user = response.user;
        this.is_login = true;
      } catch (error) {
        throw error;
      }
    },
    async validateSession() {
      try {
        const response = await globalValidation(); // Call the global validation API

        if (response.is_authenticated) {
          this.user = response.user;
          this.is_login = true;
        } else {
          this.is_login = false;
          this.user = null;
        }
      } catch (error) {
        console.error("Error during session validation:", error);
        this.is_login = false;
        this.user = null;
      }
    },
  },
  persist: true, // Persist the state across sessions
});
