<template>
  <div v-if="currentUser">
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
        <div
          class=""
          :class="{
            'bigScreensidenav test': !smallScreen,
            smallScreensidenav: smallScreen,
          }"
        >
          <div class="habitfeed-logo">
            <h1>21DAYs</h1>
          </div>

          <div class="profile">
            <img :src="currentUser.image" alt="" class="profileimg" />
            <h3>{{ currentUser.username }}</h3>
          </div>

          <div class="navlink">
            <ul>
              <li>
                <router-link
                  to="/habit-feed"
                  @click="smallScreen = false"
                  exact-active-class="navactive"
                  ><i class="fa-solid fa-house"></i>Home</router-link
                >
              </li>
              <li>
                <router-link
                  to="/profile"
                  @click="smallScreen = false"
                  exact-active-class="navactive"
                  ><i class="fa-solid fa-user"></i>Profile</router-link
                >
              </li>
              <li>
                <router-link
                  to="/leader-board"
                  @click="smallScreen = false"
                  exact-active-class="navactive"
                  ><i class="fa-solid fa-ranking-star"></i
                  >Leaderboard</router-link
                >
              </li>
              <li>
                <router-link
                  to="/create"
                  @click="smallScreen = false"
                  exact-active-class="navactive"
                  ><i class="fa-solid fa-circle-plus"></i>Create</router-link
                >
              </li>
            </ul>
          </div>
          <div class="logout">
            <i
              class="fa-solid fa-light fa-arrow-right-from-bracket fa-rotate-180"
            ></i>
            <button class="text-black font-bold py-2 rounded" @click="logout()">
              Logout
            </button>
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
        <!-- to solve for non event emit component warning -->
        <div v-if="isProfileEditRoute">
          <ProfileEdit @profileUpdated="updateSideNav"></ProfileEdit>
        </div>
        <div v-else>
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HabitFeed from "./HabitFeed";
import ProfileEdit from "./ProfileEdit.vue";
import { computed, defineComponent, onMounted, ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import { useRoute } from "vue-router";
import getCurrentUser from "../composables/getCurrentUser";
export default defineComponent({
  components: { HabitFeed, ProfileEdit },
  setup() {
    let route = useRoute();
    let smallScreen = ref(false);
    let router = useRouter();
    let currentUser = ref();

    let logout = async () => {
      try {
        let response = await axios.delete("/api/v1/auth/logout");
        if (response.status === 200) {
          router.push("/");
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

    //this is event emit from ProfileEdit.vue to update sidenav profile data
    let updateSideNav = (updateData) => {
      currentUser.value.username = updateData.userName;
      currentUser.value.bio = updateData.bio;
      currentUser.value.image = updateData.imageUrl;
    };
    //this is event emit from ProfileEdit.vue to update sidenav profile data
    onMounted(async () => {
      currentUser.value = await getCurrentUser();
    });

    //check is it profile/edit route or not to control conditionally <router-view> or <ProfileEdit/>
    const isProfileEditRoute = computed(() => {
      return route.path === "/profile/edit";
    });

    return {
      smallScreen,
      logout,
      currentUser,
      updateSideNav,
      isProfileEditRoute,
    };
  },
});
</script>

<style>
.habitfeed-logo {
  @apply font-bold text-3xl pt-3;
}
.profile {
  @apply mx-auto text-center;
}
.profileimg {
  width: 80px;
  height: 80px;
  object-fit: cover;
  @apply mx-auto mt-20 rounded-full mb-5;
}
.navlink {
  @apply text-2xl mx-auto;
  margin-top: 110px;
  width: 85%;
}

.navlink li {
  @apply mt-6;
}

.navlink i {
  @apply mr-3;
}
.navactive {
  background-color: #61c9a8;
  @apply py-3 px-3 rounded-3xl;
}
.bigScreensidenav {
  border-top-right-radius: 80px;
  border-top: 1px solid #e2e8f0;
  border-bottom-right-radius: 80px;
  border-bottom: 1px solid #e2e8f0;
  background-color: #fff;
  padding: 1rem;
  width: 100%;
  @apply h-screen;
}
.logout {
  @apply mx-auto text-2xl md:mt-20 mt-5;
  width: 80%;
}
.logout button {
  @apply px-3;
}
.logout i {
  @apply ml-2;
}
.content {
  @apply mx-auto h-screen;
  width: 80%;
}

.smallScreensidenav {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  @apply h-screen px-5 py-5;
  height: fit-content;
}
.test {
  position: fixed;
  width: 20%;
}
</style>
