import { useAuthStore } from "~/stores/auth";

export default defineNuxtRouteMiddleware(async (to, from, next) => {
  const authStore = useAuthStore();

  // Call the validateUser action to perform global validation
  await authStore.validateUser();

  next();
});
