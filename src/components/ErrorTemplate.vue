<template>
  <div class="errorContainer">
    <div class="errorCard">
      <h1>{{ errorMessage }}</h1>
      <h1 class="statusCode">{{ errorStatus }}</h1>
      <h1 v-if="isServerError">
        Sorry, we are having a problem with our system.
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "ErrorTemplate",
  props: ["errorMessage", "errorStatus"],
  computed: {
    isServerError() {
      return this.errorStatus && this.errorStatus.toString().startsWith("5");
    },
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
