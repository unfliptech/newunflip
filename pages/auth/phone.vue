<template>
    <div>
        <h1>Enter Your Phone Number</h1>
        <input type="text" v-model="phone" @input="validatePhone" placeholder="Enter your phone number" />
        <button :disabled="!isValidPhone || isLoading" @click="submitPhone">
            {{ isLoading ? "Sending OTP..." : "Send OTP" }}
        </button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useUserStore } from '~/stores/user';

const phone = ref('');
const isLoading = ref(false);
const isValidPhone = ref(false);
const userStore = useUserStore();

const validatePhone = () => {
    const phoneRegex = /^[6-9]\d{9}$/;
    isValidPhone.value = phoneRegex.test(phone.value);
};

const submitPhone = async () => {
    isLoading.value = true;
    try {
        const success = await userStore.sendOTP();
        if (success) {
            // Redirect to OTP page
            navigateTo('/auth/otp');
        }
    } catch (error) {
        console.error("Error sending OTP:", error);
    } finally {
        isLoading.value = false;
    }
};
</script>