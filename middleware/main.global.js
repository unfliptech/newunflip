import { useAuthStore } from "~/stores/auth";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const authStore = useAuthStore();

  // Call the validateUser action to perform global validation
  await authStore.validateUser();

  // The middleware ends here; it performs the validation and allows the navigation to continue
});
