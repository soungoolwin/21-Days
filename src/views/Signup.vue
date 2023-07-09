<template>
  <h2 class="text-2xl font-semibold mb-6">Register</h2>
  <form @submit.prevent="signupSubmit">
    <div class="mb-4">
      <label class="block mb-2" for="email">Email</label>
      <input
        class="w-full px-4 py-2 border border-gray-300 rounded"
        type="email"
        id="email"
        name="email"
        v-model="email"
        placeholder="Enter your email"
        required
      />
    </div>
    <div class="mb-4">
      <label class="block mb-2" for="username">Username</label>
      <input
        class="w-full px-4 py-2 border border-gray-300 rounded"
        type="text"
        id="username"
        name="username"
        v-model="username"
        placeholder="Enter your username"
        required
      />
    </div>
    <div class="mb-4">
      <label class="block mb-2" for="password">Password</label>
      <input
        class="w-full px-4 py-2 border border-gray-300 rounded"
        type="password"
        id="password"
        name="password"
        v-model="password"
        placeholder="Enter your password"
        required
      />
    </div>
    <div class="mb-6">
      <label class="block mb-2" for="confirm-password">Confirm Password</label>
      <input
        class="w-full px-4 py-2 border border-gray-300 rounded"
        type="password"
        id="confirm-password"
        name="confirm-password"
        v-model="confirmPassword"
        placeholder="Confirm your password"
        required
      />
    </div>
    <p v-if="passwordMismatch && confirmPassword" class="text-red-500 mb-5">
      Passwords do not match!
    </p>
    <p v-if="error" class="text-red-500 mb-5">{{ error }}</p>
    <button
      class="Submitbutton"
      type="submit"
      :disabled="passwordMismatch && error"
    >
      Sign Up
    </button>
  </form>
  <p class="text-center pt-5">
    Already have an account?
    <span class="swapForm" @click="$emit('showLoginForm')">Login</span>
  </p>
</template>

<script>
import { ref, watch } from "vue";
import axios from "../axios";
import { useRouter } from "vue-router";
export default {
  emits: ["showLoginForm"],
  setup() {
    let router = new useRouter();
    let passwordMismatch = ref(false);
    let error = ref("");
    //for signup submit
    let email = ref("");
    let username = ref("");
    let password = ref("");
    let confirmPassword = ref("");

    //checking password match
    watch([password, confirmPassword], ([newPassword, newConfirmPassword]) => {
      passwordMismatch.value = newPassword !== newConfirmPassword;
    });

    //checking password 8 character
    watch(password, (newPassword) => {
      if (newPassword.length < 8) {
        error.value = "Password must be at least 8 characters";
      } else {
        error.value = "";
      }
    });
    let signupSubmit = async () => {
      if (passwordMismatch.value && error.value.length) {
        console.log("something wrong");
        router.push("/");
      }
      let response = await axios.post("/auth/register", {
        email: email.value,
        username: username.value,
        password: password.value,
      });
      console.log(response);
    };

    return {
      signupSubmit,
      email,
      username,
      password,
      confirmPassword,
      passwordMismatch,
      error,
    };
  },
};
</script>

<style></style>
