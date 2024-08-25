// stores/global.js
import { defineStore } from "pinia";
import { globalValidation } from "~/services/apis/main";

export const useGlobalStore = defineStore("global", {
  state: () => ({
    user: null,
    is_login: false,
  }),
  actions: {
    async globalValidate() {
      try {
        const response = await globalValidation();
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
  persist: true,
});
