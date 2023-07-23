<template>
  <div v-if="currentLoginUser">
    <div class="profileCard">
      <h1 class="text-2xl">My Profile</h1>

      <div class="grid grid-cols-5 gap-8 mt-10">
        <!-- First Column: Profile Image -->
        <div class="md:col-span-1 col-span-2">
          <img :src="currentLoginUser.image" alt="" class="rounded-full" />
        </div>

        <!-- Second Column: Name and Bio -->
        <div class="md:col-span-3 col-span-2 mt-[5%]">
          <h2 class="md:text-xl font-semibold">
            {{ currentLoginUser.username }}
          </h2>
          <p class="text-gray-600">{{ currentLoginUser.bio }}</p>
        </div>

        <!-- Third Column: Edit Button -->
        <div class="col-span-1 mt-[15%] align-middle">
          <router-link class="py-2" :to="{ name: 'ProfileEdit' }"
            >Edit</router-link
          >
        </div>
      </div>

      <!-- completed, ongoing count -->
      <div class="w-[60%] mx-auto mt-10">
        <div class="flex justify-between">
          <div class="flex items-center justify-center mr-2">
            <h2 class="text-center">
              <span class="block font-bold">{{ builtHabits.length }}</span>
              <span class="block">Completed</span>
            </h2>
          </div>

          <div class="flex items-center justify-center mr-2">
            <h2 class="text-center">
              <span class="block font-bold">{{ buildingHabits.length }}</span>
              <span class="block">Ongoing</span>
            </h2>
          </div>
        </div>
      </div>

      <div v-for="userHabit in displayHabits" :key="userHabit._id">
        <div class="contentcard">
          <div class="flex justify-between">
            <div>
              <h3 class="text-lg font-semibold">
                {{ userHabit.habitTitle }}
              </h3>
            </div>

            <div>
              <p class="text-gray-500">{{ userHabit.habitStatus }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center">
      <button
        @click="previousPage"
        v-if="currentPage > 1"
        class="paginateButton"
      >
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
  </div>
</template>

<script>
import { computed, onMounted, ref } from "vue";
import axios from "axios";

export default {
  setup() {
    let currentLoginUser = ref({});
    let userHabits = ref([]);

    let getCurrentUserandHabits = async () => {
      try {
        let response = await axios.get(
          "/api/v1/user/showCurrentUserAndItsHabits"
        );

        if (response.status == 200) {
          currentLoginUser.value = response.data.user;
          userHabits.value = response.data.habits;
        }
      } catch (error) {
        console.log(error);
      }
    };

    // Computed properties to separate built and building habits and get their counts
    let builtHabits = computed(() =>
      userHabits.value.filter((habit) => habit.habitStatus === "Built")
    );
    let buildingHabits = computed(() =>
      userHabits.value.filter((habit) => habit.habitStatus === "Building")
    );

    //Computed properties to make frontend pagination
    const pageSize = 5;
    const currentPage = ref(1);

    const totalPages = computed(() =>
      Math.ceil(userHabits.value.length / pageSize)
    );

    const displayHabits = computed(() => {
      const startIndex = (currentPage.value - 1) * pageSize;
      const endIndex = startIndex + pageSize;
      return userHabits.value.slice(startIndex, endIndex);
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
    //
    onMounted(async () => {
      await getCurrentUserandHabits();
    });
    return {
      currentLoginUser,
      userHabits,
      getCurrentUserandHabits,
      builtHabits,
      buildingHabits,
      displayHabits,
      nextPage,
      previousPage,
      currentPage,
      totalPages,
    };
  },
};
</script>

<style>
.profileCard {
  @apply my-10 mx-auto w-[80%];
}
</style>
