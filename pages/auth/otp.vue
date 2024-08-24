<template>
    <div>
        <h1>Enter OTP</h1>
        <input type="text" v-model="otp" @input="validateOTP" placeholder="Enter your OTP" />
        <button :disabled="!isValidOTP || isLoading" @click="submitOTP">
            {{ isLoading ? "Verifying OTP..." : "Verify OTP" }}
        </button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useUserStore } from '~/stores/user';

const otp = ref('');
const isLoading = ref(false);
const isValidOTP = ref(false);
const userStore = useUserStore();

const validateOTP = () => {
    const otpRegex = /^\d{6}$/;
    isValidOTP.value = otpRegex.test(otp.value);
};

const submitOTP = async () => {
    isLoading.value = true;
    try {
        const success = await userStore.verifyOTP(otp.value);
        if (success) {
            // Redirect to Profile page
            navigateTo('/profile');
        }
    } catch (error) {
        console.error("Error verifying OTP:", error);
    } finally {
        isLoading.value = false;
    }
};
</script>