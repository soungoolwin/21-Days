<template>
  <h2 class="formheader">Sign in</h2>
  <form @submit.prevent="loginSubmit">
    <div class="mb-4">
      <label class="formlabel" for="email">Email</label>
      <input
        class="forminput"
        type="email"
        id="email"
        name="email"
        v-model="email"
        placeholder="Enter your email"
        required
      />
    </div>

    <div class="mb-4 relative">
      <label class="formlabel" for="password">Password</label>
      <input
        class="forminput pr-10"
        :type="showPassword ? 'text' : 'password'"
        id="password"
        name="password"
        v-model="password"
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

    <p class="text-red-500 mb-4">{{ errorMsg }}</p>
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
import axios from "axios";
import { useRouter } from "vue-router";

export default {
  emits: ["showSignupForm"],
  setup() {
    let showPassword = ref(false);
    let router = new useRouter();
    let errorMsg = ref("");
    // for login submit
    let email = ref("");
    let password = ref("");

    let loginSubmit = async () => {
      try {
        let response = await axios.post("/api/v1/auth/login", {
          email: email.value,
          password: password.value,
        });
        if (response.status === 200) {
          let rp = await axios.get("/api/v1/habit/getAllHabits");

          router.push("/habit-feed");
        }
      } catch (error) {
        if (error.response.status == 401) {
          errorMsg.value = error.response.data.message + "!!!";
        } else if (error.response.status == 429) {
          errorMsg.value = error.response.data + "!!!";
        } else {
          errorMsg.value = "Something wrong";
        }
      }
    };

    return { showPassword, email, password, loginSubmit, errorMsg };
  },
};
</script>

<style></style>
