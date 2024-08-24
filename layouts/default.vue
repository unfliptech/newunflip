<!-- layouts/default.vue -->
<template>
    <div>
        <header>
            <nav>
                <NuxtLink to="/">Home</NuxtLink> |
                <NuxtLink to="/profile">Profile</NuxtLink> |
                <NuxtLink to="/about">About</NuxtLink>
            </nav>
        </header>
        <NuxtPage />
    </div>
</template>

<style scoped>
nav {
    margin-bottom: 20px;
}

nav a {
    margin-right: 10px;
    text-decoration: none;
    color: #42b983;
}

nav a:hover {
    text-decoration: underline;
}
</style>