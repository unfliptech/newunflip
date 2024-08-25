<template>
    <div class="phone-auth-container">
        <h1>Enter Your Phone Number</h1>
        <form @submit.prevent="submitPhone">
            <input type="text" v-model="phone" placeholder="Enter your s phone number" :disabled="loading" />
            <p v-if="error" class="error-message">{{ error }}</p>
            <button type="submit" :disabled="!isPhoneValid || loading">
                <span v-if="loading">Loading...</span>
                <span v-else>Send OTP</span>
            </button>
        </form>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useAuthStore } from "~/stores/auth";

const authStore = useAuthStore();
const phone = ref("");
const loading = ref(false);
const error = ref("");

const isPhoneValid = computed(() => {
    const phonePattern = /^[6-9]\d{9}$/;
    return phonePattern.test(phone.value);
});

const submitPhone = async () => {
    if (!isPhoneValid.value) return;

    loading.value = true;
    error.value = "";

    try {
        await authStore.getOtp({ phone: phone.value });
    } catch (err) {
        error.value = err.response?.data?.error || "Failed to send OTP. Please try again.";
    } finally {
        loading.value = false;
    }
};
</script>

<style scoped>
.phone-auth-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    text-align: center;
}

input {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    font-size: 16px;
}

button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
}

button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
}

.error-message {
    color: red;
    margin-bottom: 10px;
}
</style>