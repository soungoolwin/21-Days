<template>
  <div class="errorContainer">
    <div class="errorCard">
      <h1
        :class="{
          'text-green-500': theme == 'green',
          'text-red-500': theme == 'red',
        }"
      >
        {{ message }}
      </h1>
      <p v-if="isVerifyTemplate">
        If you verified your email, go back to
        <button class="text-blue-500" @click="$emit('hideVerifyTemplate')">
          Login
        </button>
        page.
      </p>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
export default {
  props: ["message", "theme"],
  setup(props) {
    let message = ref(props.message);
    let theme = ref(props.theme);
    let isVerifyTemplate = ref(false);

    return { message, theme, isVerifyTemplate };
  },
};
</script>

<style>
.errorContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Set the height of the container to the full viewport height */
}

.errorCard {
  background-color: white;
  width: 60%;
  padding: 40px;
  border-radius: 20px;
}

.errorCard h1 {
  margin: 15px;
  font-weight: bolder;
}
.statusCode {
  color: red;
  font-size: 40px;
}
</style>
