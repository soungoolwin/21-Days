<template>
  <div class="contentcard">
    <div class="md:grid md:grid-cols-3">
      <div class="md:col-span-2">
        <h3 class="text-lg font-semibold">Habit Name</h3>
      </div>
      <div class="col-span-1 flex md:justify-end items-center">
        <button class="joinButton">Join</button>
      </div>
    </div>
    <div class="mt-4 flex md:justify-end">
      <p class="text-gray-500">10 people joined</p>
    </div>
  </div>
  <div class="contentcard">
    <div class="md:grid md:grid-cols-3">
      <div class="md:col-span-2">
        <h3 class="text-lg font-semibold">Habit Name</h3>
      </div>
      <div class="col-span-1 flex md:justify-end items-center">
        <button class="joinButton">Join</button>
      </div>
    </div>
    <div class="mt-4 flex md:justify-end">
      <p class="text-gray-500">10 people joined</p>
    </div>
  </div>
  <div class="contentcard">
    <div class="md:grid md:grid-cols-3">
      <div class="md:col-span-2">
        <h3 class="text-lg font-semibold">
          Lorem ipsum dolor sit amet, consectetur
        </h3>
      </div>
      <div class="col-span-1 flex md:justify-end items-center">
        <button class="joinButton">Join</button>
      </div>
    </div>
    <div class="mt-4 flex md:justify-end">
      <p class="text-gray-500">10 people joined</p>
    </div>
  </div>
  <div class="contentcard">
    <div class="md:grid md:grid-cols-3">
      <div class="md:col-span-2">
        <h3 class="text-lg font-semibold">Habit Name</h3>
      </div>
      <div class="col-span-1 flex md:justify-end items-center">
        <button class="joinButton">Join</button>
      </div>
    </div>
    <div class="mt-4 flex md:justify-end">
      <p class="text-gray-500">10 people joined</p>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    let smallScreen = ref(false);
    return { smallScreen };
  },
};
</script>

<style>
body {
  background-image: url("../../public/images/BG_2.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}
.habitfeed-logo {
  @apply font-bold text-3xl pt-3;
}
.profile {
  @apply mx-auto text-center;
}
.profileimg {
  width: 80px;
  height: 80px;
  @apply mx-auto mt-20 rounded-full mb-5;
}
.navlink {
  @apply text-2xl mx-auto;
  margin-top: 110px;
  width: 85%;
}
.navlink li {
  @apply mt-6 px-3;
}

.navlink i {
  @apply mr-3;
}
.logout {
  @apply mx-auto text-2xl mt-20;
  width: 80%;
}
.logout button {
  @apply px-3;
}
.logout i {
  @apply ml-2;
}
.sidenav {
  border-top-right-radius: 80px;
  border-top: 1px solid #e2e8f0;
  border-bottom-right-radius: 80px;
  border-bottom: 1px solid #e2e8f0;
}

.card {
  background-color: #fff;
  padding: 1rem;
  @apply h-screen;
}
.content {
  @apply mx-auto h-screen;
  width: 70%;
}
.contentcard {
  @apply mt-11 rounded-3xl bg-white  shadow-lg p-8  mx-auto;
}

.joinButton {
  @apply text-white font-semibold py-2 mt-3 px-4 rounded hover:bg-green-600;
  background-color: #61c9a8;
}
</style>
