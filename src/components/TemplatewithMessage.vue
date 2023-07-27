<template>
  <div class="errorContainer">
    <div class="errorCard">
      <h1 class="text-red-500">{{ message }}</h1>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  props: ["message"],
  setup(props) {
    let message = ref(props.message);

    return { message };
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
