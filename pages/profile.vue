<template>
    <div v-if="isLoggedIn">
        <h1>Hello, {{ userName }}</h1>
    </div>
    <div v-else>
        <p>You need to log in to view your profile.</p>
    </div>
</template>

<script setup>
import { useUserStore } from '~/stores/user';

const userStore = useUserStore();
const isLoggedIn = computed(() => userStore.isLoggedIn);
const userName = computed(() => userStore.full_name);
</script>