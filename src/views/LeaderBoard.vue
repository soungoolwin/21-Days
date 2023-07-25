<template>
  <h1 class="text-2xl font-bold mt-[60px]">LeaderBoard</h1>
  <table>
    <tr>
      <th class="small-width">Place</th>
      <th class="wide-width">Name</th>
      <th class="small-width">Count</th>
    </tr>

    <tr v-for="(user, index) in displayHabits" :key="index">
      <td>{{ index + 1 }}</td>
      <td>{{ user.username }}</td>
      <td>{{ user.habitsBuilt }}</td>
    </tr>
  </table>
  <div class="flex justify-center">
    <button @click="previousPage" v-if="currentPage > 1" class="paginateButton">
      Previous
    </button>
    <button
      @click="nextPage"
      v-if="currentPage < totalPages"
      class="paginateButton"
    >
      Next
    </button>
  </div>
</template>

<script>
import axios from "axios";
import { useRouter } from "vue-router";
import { computed, onMounted, ref } from "vue";
export default {
  setup() {
    let router = useRouter();
    let usersInLeaderboard = ref([]);
    let getLeaderboard = async () => {
      try {
        let response = await axios.get("/api/v1/user/showLeaderBoard");
        if (response.status == 200) {
          usersInLeaderboard.value = response.data.data;
        }
      } catch (error) {
        const errorMessage = error.response.data.message;
        const errorStatus = error.response.status;
        router.push({
          name: "ErrorTemplate",
          params: { errorMessage, errorStatus },
        });
      }
    };

    //pagination
    const pageSize = 8;
    const currentPage = ref(1);

    const totalPages = computed(() =>
      Math.ceil(usersInLeaderboard.value.length / pageSize)
    );

    const displayHabits = computed(() => {
      const startIndex = (currentPage.value - 1) * pageSize;
      const endIndex = startIndex + pageSize;
      return usersInLeaderboard.value.slice(startIndex, endIndex);
    });

    const nextPage = () => {
      if (currentPage.value < totalPages.value) {
        currentPage.value++;
      }
    };

    const previousPage = () => {
      if (currentPage.value > 1) {
        currentPage.value--;
      }
    };
    //pagination

    onMounted(async () => {
      await getLeaderboard();
    });
    return {
      usersInLeaderboard,
      displayHabits,
      currentPage,
      previousPage,
      nextPage,
      totalPages,
    };
  },
};
</script>

<style>
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th,
td {
  padding: 18px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.small-width {
  width: 10px; /* Adjust this value to set the width for Place and Count columns */
}

.wide-width {
  width: 90%; /* Adjust this value to set the width for the Name column */
}
</style>
