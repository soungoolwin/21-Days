<template>
  <div v-if="!habits">
    <TemplatewithMessage message="No Habit Yet!!" theme="red" />
  </div>
  <div class="contentcard" v-for="habit in habits" :key="habit._id">
    <div class="flex justify-between">
      <div>
        <h3 class="text-lg font-semibold">{{ habit.habitTitle }}</h3>
      </div>

      <div>
        <p class="text-gray-500">{{ habit.habitStatus }}</p>
      </div>
    </div>
  </div>
  <div class="flex justify-center">
    <button v-if="currentPage > 1" class="paginateButton" @click="prevPage()">
      Previous
    </button>
    <button
      v-if="currentPage < lastPage"
      class="paginateButton"
      @click="nextPage()"
    >
      Next
    </button>
  </div>
</template>

<script>
import TemplatewithMessage from "../components/TemplatewithMessage";
import LoadingSpinner from "../components/LoadingSpinner";
import { onMounted, ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
export default {
  props: ["currentUser"],
  components: {
    TemplatewithMessage,
    LoadingSpinner,
  },
  setup() {
    let router = useRouter();
    let smallScreen = ref(false);
    let habits = ref([]);
    let currentPage = ref(1);
    let lastPage = ref();
    let loading = ref(true);
    let endPoint = ref("/api/v1/habit/getAllHabits?page=");

    let nextPage = async () => {
      loading.value = true;
      currentPage.value++;
      await getHabits(currentPage.value);
      loading.value = false;
    };
    let prevPage = async () => {
      loading.value = true;
      currentPage.value--;
      await getHabits(currentPage.value);
      loading.value = false;
    };
    let getHabits = async (currentPage) => {
      try {
        let response = await axios.get(endPoint.value + currentPage);
        habits.value = response.data.data;
        lastPage.value = response.data.totalNoOfPages;
        loading.value = false;
      } catch (error) {
        const errorMessage = error.response.data.message;
        const errorStatus = error.response.status;
        router.push({
          name: "ErrorTemplate",
          params: { errorMessage, errorStatus },
        });
      }
    };

    onMounted(() => {
      getHabits(currentPage.value);
    });

    return {
      smallScreen,
      habits,
      currentPage,
      lastPage,
      nextPage,
      prevPage,
      loading,
    };
  },
};
</script>

<style></style>
