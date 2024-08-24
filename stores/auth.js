import { defineStore } from "pinia";
import { globalValidation } from "~/services/apis/main";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    is_login: false,
  }),
  actions: {
    async validateUser() {
      try {
        // Call the global validation API without device info
        const response = await globalValidation();

        // Check if the user is authenticated
        if (response.is_authenticated) {
          this.user = response.user;
          this.is_login = true;
        } else {
          this.is_login = false;
          this.user = null;
        }
      } catch (error) {
        console.error("Error during global validation:", error);
        this.is_login = false;
        this.user = null;
      }
    },
  },
  persist: true, // Ensure state is persisted across sessions
});
