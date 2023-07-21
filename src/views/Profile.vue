<template>
  <div v-if="currentUser">
    <div class="my-10 mx-auto w-[80%]">
      <h1 class="text-2xl">My Profile</h1>

      <div class="grid grid-cols-5 gap-8 mt-10">
        <!-- First Column: Profile Image -->
        <div class="md:col-span-1 col-span-2">
          <img
            src="../../public/images/profile.webp"
            alt=""
            class="rounded-full"
          />
        </div>

        <!-- Second Column: Name and Bio -->
        <div class="md:col-span-3 col-span-2 mt-[5%]">
          <h2 class="md:text-xl font-semibold">{{ currentUser.username }}</h2>
          <p class="text-gray-600">{{ currentUser.bio }}</p>
        </div>

        <!-- Third Column: Edit Button -->
        <div class="col-span-1 mt-[15%] align-middle">
          <button class="py-2">Edit</button>
        </div>
      </div>

      <div class="w-[60%] mx-auto mt-10">
        <div class="flex justify-between">
          <div class="flex items-center justify-center mr-2">
            <h2 class="text-center">
              <span class="block font-bold">23</span>
              <span class="block">Completed</span>
            </h2>
          </div>

          <div class="flex items-center justify-center mr-2">
            <h2 class="text-center">
              <span class="block font-bold">12</span>
              <span class="block">Ongoing</span>
            </h2>
          </div>
        </div>
      </div>

      <div class="contentcard">
        <div class="flex justify-between">
          <div>
            <h3 class="text-lg font-semibold">
              Drink a cup of water every morning
            </h3>
          </div>

          <div>
            <p class="text-gray-500">Ongoing</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import getCurrentUser from "@/composables/getCurrentUser";
export default {
  setup() {
    let currentUser = ref();

    onMounted(async () => {
      currentUser.value = await getCurrentUser();
    });
    return { currentUser };
  },
};
</script>

<style>
.biosector {
  width: 100%;
}
</style>
