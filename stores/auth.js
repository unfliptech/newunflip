// stores/auth.js

import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
import { globalValidation } from "~/services/apis/main";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: useStorage("user", null),
    is_login: useStorage("is_login", false),
  }),
  actions: {
    async validateUser() {
      try {
        const response = await globalValidation();
        if (response.status === "authenticated") {
          this.user = response.user;
          this.is_login = true;
        } else {
          this.is_login = false;
          this.user = null;
        }
      } catch (error) {
        console.error("Error in global validation:", error);
        this.is_login = false;
        this.user = null;
      }
    },
  },
  persist: true,
});
