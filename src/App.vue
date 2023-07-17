<template>
  <LoadingSpinner v-if="loading"></LoadingSpinner>
  <router-view />
</template>

<script>
import LoadingSpinner from "./components/LoadingSpinner";
export default {
  components: { LoadingSpinner },
  setup() {},
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #020122;
}
body,
html {
  margin: 0;
  padding: 0;
  height: 100%;
  background-image: url("../public/images/BG_2.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}
</style>
