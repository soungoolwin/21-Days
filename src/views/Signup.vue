<template>
  <h2 class="text-2xl font-semibold mb-6">Register</h2>
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
    <div class="mb-4">
      <label class="block mb-2" for="username">Username</label>
      <input
        class="w-full px-4 py-2 border border-gray-300 rounded"
        type="text"
        id="username"
        name="username"
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
        placeholder="Confirm your password"
        required
      />
    </div>
    <button class="Submitbutton" type="submit">Sign Up</button>
  </form>
  <p class="text-center pt-5">
    Already have an account?
    <span class="swapForm" @click="$emit('showLoginForm')">Login</span>
  </p>
</template>

<script>
export default {
  emits: ["showLoginForm"],
};
</script>

<style></style>
