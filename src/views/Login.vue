<template>
  <h2 class="text-2xl font-semibold mb-6">Sign in</h2>
  <form>
    <div class="mb-4">
      <label class="block mb-2" for="email">Email</label>
      <input
        class="w-full px-4 py-2 border border-gray-300 rounded"
        type="email"
        id="email"
        name="email"
        placeholder="Enter your email"
        required
      />
    </div>

    <div class="mb-4 relative">
      <label class="block mb-2" for="password">Password</label>
      <input
        class="w-full px-4 py-2 border border-gray-300 rounded pr-10"
        :type="showPassword ? 'text' : 'password'"
        id="password"
        name="password"
        placeholder="Enter your password"
        required
      />
      <div v-if="showPassword">
        <i
          class="fa-regular fa-eye-slash absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer pt-5"
          @click="showPassword = false"
        ></i>
      </div>
      <div v-else>
        <i
          class="fa-regular fa-eye absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer pt-5"
          @click="showPassword = true"
        ></i>
      </div>
    </div>
    <div class="mb-4">
      <input
        type="checkbox"
        id="rememberMe"
        class="h-4 w-4 text-blue-500 rounded border-gray-300 focus:ring-blue-500 focus:border-blue-500"
      />
      <label for="rememberMe" class="ml-2 text-sm text-gray-700"
        >Remember me</label
      >
    </div>

    <button class="Submitbutton" type="submit">Log in</button>
  </form>
  <p class="text-center pt-5">
    Not registered yet?
    <span class="swapForm" @click="$emit('showSignupForm')">Register</span>
    | Forgot Password
  </p>
</template>

<script>
import { ref } from "vue";
export default {
  emits: ["showSignupForm"],
  setup() {
    let showPassword = ref(false);
    return { showPassword };
  },
};
</script>

<style></style>
