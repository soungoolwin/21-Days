<template>
  <div class="contentcard" v-for="habit in habits" :key="habit._id">
    <div class="md:grid md:grid-cols-3">
      <div class="md:col-span-2">
        <h3 class="text-lg font-semibold">{{ habit.habitTitle }}</h3>
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
import { onMounted, ref } from "vue";
import axios from "axios";
export default {
  setup() {
    let smallScreen = ref(false);
    let habits = ref([]);
    let currentPage = ref(1);

    onMounted(async () => {
      try {
        let response = await axios.get(
          "/api/v1/habit/getAllHabits?page=" + currentPage.value
        );
        habits.value = response.data.data;
      } catch (error) {
        console.error("Error fetching habits:", error);
      }
    });

    return { smallScreen, habits };
  },
};
</script>

<style></style>
