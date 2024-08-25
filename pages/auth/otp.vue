<template>
    <div class="otp-auth-container">
        <h1>Enter OTP</h1>
        <form @submit.prevent="submitOtp">
            <input type="text" v-model="otp" placeholder="Enter OTP" :disabled="loading" />
            <p v-if="error" class="error-message">{{ error }}</p>
            <button type="submit" :disabled="!isOtpValid || loading">
                <span v-if="loading">Loading...</span>
                <span v-else>Verify OTP</span>
            </button>
        </form>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useAuthStore } from "~/stores/auth";

const authStore = useAuthStore();
const otp = ref("");
const loading = ref(false);
const error = ref("");

const isOtpValid = computed(() => otp.value.length === 6 && /^\d+$/.test(otp.value));

const submitOtp = async () => {
    if (!isOtpValid.value) return;

    loading.value = true;
    error.value = "";

    try {
        await authStore.verifyOtp(otp.value);
        navigateTo('/profile'); // Redirect to the profile page after successful OTP verification
    } catch (err) {
        error.value = err.response?.data?.error || "Failed to verify OTP. Please try again.";
    } finally {
        loading.value = false;
    }
};
</script>

<style scoped>
.otp-auth-container {
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
