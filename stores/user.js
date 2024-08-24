// import { defineStore } from "pinia";
// import { useCookie } from "#app";
// import authService from "@/services/apis/auth";

// export const useUserStore = defineStore("user", {
//   state: () => ({
//     id: "",
//     full_name: "",
//     email: "",
//     isLoggedIn: false,
//     phone: "",
//   }),
//   actions: {
//     async sendOTP() {
//       try {
//         const response = await authService.sendOTP(this.phone);
//         return response.data.success;
//       } catch (error) {
//         console.error("Failed to send OTP:", error);
//         return false;
//       }
//     },
//     async verifyOTP(otp) {
//       try {
//         const response = await authService.verifyOTP({
//           phone: this.phone,
//           otp: otp,
//         });

//         const { user } = response.data;

//         // Update the store with user information
//         this.id = user.id;
//         this.full_name = user.name;
//         this.email = user.email;
//         this.isLoggedIn = true;

//         return true;
//       } catch (error) {
//         console.error("OTP verification failed:", error);
//         return false;
//       }
//     },
//   },
//   persist: true,
// });
