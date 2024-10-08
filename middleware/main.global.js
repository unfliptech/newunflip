import { useGlobalStore } from "~/stores/global";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const globalStore = useGlobalStore();
  await globalStore.globalValidate();
});
