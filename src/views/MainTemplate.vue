<template>
  <div>
    <!-- menu icon -->
    <div class="block md:hidden fixed top-0 right-0 mt-4 mr-4 z-50">
      <button
        @click="smallScreen = !smallScreen"
        class="text-gray-500 focus:outline-none hover:text-gray-900"
      >
        <i class="fas fa-bars"></i>
      </button>
    </div>
    <!-- menu icon -->
    <div class="grid grid-cols-4">
      <div
        class=""
        :class="{
          'col-span-1 hidden md:block': !smallScreen,
          'col-span-4': smallScreen,
        }"
      >
        <div class="sidenav card">
          <div class="habitfeed-logo">
            <h1>21DAYs</h1>
          </div>

          <div class="profile">
            <img
              src="../../public/images/profile.webp"
              alt=""
              class="profileimg"
            />
            <h3>Soung Oo Lwin</h3>
          </div>

          <div class="navlink">
            <ul>
              <li>
                <router-link to="/habit-feed" exact-active-class="navactive"
                  ><i class="fa-solid fa-house"></i>Home</router-link
                >
              </li>
              <li>
                <router-link to="/profile" exact-active-class="navactive"
                  ><i class="fa-solid fa-user"></i>Profile</router-link
                >
              </li>
              <li>
                <router-link to="/leader-board" exact-active-class="navactive"
                  ><i class="fa-solid fa-ranking-star"></i
                  >Leaderboard</router-link
                >
              </li>
              <li>
                <router-link to="/create" exact-active-class="navactive"
                  ><i class="fa-solid fa-circle-plus"></i>Create</router-link
                >
              </li>
            </ul>
          </div>
          <div class="logout">
            <i
              class="fa-solid fa-light fa-arrow-right-from-bracket fa-rotate-180"
            ></i>
            <button class="text-black font-bold py-2 rounded">Logout</button>
          </div>
        </div>
      </div>
      <div
        class=""
        :class="{
          'md:col-span-3 col-span-4 content': !smallScreen,
          'hidden md:block': smallScreen,
        }"
      >
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import HabitFeed from "./HabitFeed";
import { ref } from "vue";
export default {
  components: { HabitFeed },
  setup() {
    let smallScreen = ref(false);
    return { smallScreen };
  },
};
</script>

<style>
.navactive {
  background-color: #61c9a8;
  @apply py-3 px-3 rounded-3xl;
}
</style>
