import { useAuthStore } from "~/stores/auth";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const authStore = useAuthStore();

  // Perform the session validation using the auth store
  await authStore.validateSession();

  // Redirect to the login page if the user is not logged in and trying to access a secure page
  if (!authStore.is_login && to.path !== "/auth/phone") {
    return navigateTo("/auth/phone");
  }
});
