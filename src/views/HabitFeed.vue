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

<style></style>
