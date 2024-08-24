<template>
    <div>
        <nav>
            <ul>
                <li>
                    <NuxtLink to="/">Home</NuxtLink>
                </li>
                <li v-if="isLogin">
                    <NuxtLink to="/profile">{{ userName }}</NuxtLink>
                </li>
                <li v-else>
                    <NuxtLink to="/auth/phone">Profile</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/about">About</NuxtLink>
                </li>
            </ul>
        </nav>
        <NuxtPage />
    </div>
</template>

<script setup>
import { useAuthStore } from '~/stores/auth';

const authStore = useAuthStore();
const isLogin = computed(() => authStore.is_login);
const userName = computed(() => authStore.user?.name || 'Profile');
</script>

<style scoped>
nav {
    background-color: #333;
    color: #fff;
    padding: 1rem;
}

ul {
    list-style: none;
    display: flex;
    gap: 1rem;
}

li {
    margin: 0;
}

a {
    color: #fff;
    text-decoration: none;
}
</style>