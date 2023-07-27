<template>
  <div class="SignupLogin mx-auto" v-if="!showVerifyTemplate">
    <div class="grid grid-cols-1 md:grid-cols-2">
      <div class="left">
        <div class="Logo">
          <h1>21DAYs</h1>
        </div>
        <div class="slogan">
          <h2>
            Embrace New Adventures:
            <br />
            Try a Habit for <span class="text-green-500">21 Days!</span>
          </h2>
        </div>
      </div>
      <div class="right">
        <div class="flex justify-center items-center md:h-screen">
          <div class="bg-white shadow-lg form flex-1 mx-4 md:mx-0 max-w-md p-8">
            <div v-if="showSignup">
              <Signup
                @showLoginForm="showSignup = false"
                @verifyEmail="test"
              ></Signup>
            </div>
            <div v-else>
              <Login @showSignupForm="showSignup = true"></Login>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- verifyTemplate -->
  <div v-else>
    <TemplatewithMessage :message="VerifyTemplateMessage" theme="green" />
  </div>
</template>

<script>
import TemplatewithMessage from "../components/TemplatewithMessage";
import { ref } from "vue";
import Login from "./Login";
import Signup from "./Signup";
export default {
  components: {
    TemplatewithMessage,
    Login,
    Signup,
  },
  setup() {
    let showSignup = ref(true);
    let showVerifyTemplate = ref(false);
    let VerifyTemplateMessage = ref("");
    let test = (data) => {
      VerifyTemplateMessage.value = data;
      showVerifyTemplate.value = true;
    };
    return {
      showSignup,
      test,
      showVerifyTemplate,
      VerifyTemplateMessage,
    };
  },
};
</script>

<style>
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";

.SignupLogin {
  @apply px-10 py-10 md:py-0;
  background: linear-gradient(to top right, #ffffff, #87cefa);
  height: 100%;
  min-height: 100vh;
}

.Logo {
  @apply font-bold text-4xl pt-10;
}
.slogan {
  margin: 140px 0;
  @apply text-4xl;
}
@media (max-width: 768px) {
  .slogan {
    margin: 80px 0;
    @apply text-4xl;
  }
}
.swapForm {
  @apply cursor-pointer underline font-bold;
}
.Submitbutton {
  @apply w-full py-2 px-4  text-white font-semibold hover:bg-green-600 rounded-3xl;
  background-color: #61c9a8;
}
</style>
