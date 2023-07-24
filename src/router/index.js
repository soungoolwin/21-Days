import { createApp } from "vue";

import { createRouter, createWebHistory } from "vue-router";
import LoadingSpinner from "../components/LoadingSpinner.vue";
import isUserLoggedIn from "@/composables/isUserLoggedIn";
import LoginRegisterTemplate from "../views/LoginRegisterTemplate.vue";
import HabitFeed from "../views/HabitFeed.vue";
import MainTemplate from "../views/MainTemplate.vue";
import Profile from "../views/Profile.vue";
import ProfileEdit from "../views/ProfileEdit.vue";
import LeaderBoard from "../views/LeaderBoard.vue";
import ErrorTemplate from "../components/ErrorTemplate.vue";
import Create from "../views/Create.vue";
const loadingSpinnerApp = createApp(LoadingSpinner);
const loadingSpinnerInstance = loadingSpinnerApp.mount(
  document.createElement("div")
);

const routes = [
  {
    path: "/",
    name: "LoginRegisterTemplate",
    component: LoginRegisterTemplate,
  },
  {
    path: "/main-template",
    component: MainTemplate,
    children: [
      {
        path: "/habit-feed",
        name: "HabitFeed",
        component: HabitFeed,
      },
      {
        path: "/profile",
        name: "Profile",
        component: Profile,
      },
      {
        path: "/profile/edit",
        name: "ProfileEdit",
        component: ProfileEdit,
      },
      {
        path: "/leader-board",
        name: "LeaderBoard",
        component: LeaderBoard,
      },
      {
        path: "/create",
        name: "Create",
        component: Create,
      },
    ],
  },
  {
    path: "/error/:errorMessage/:errorStatus",
    name: "ErrorTemplate",
    component: ErrorTemplate,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

//redirect to habit-feed when user enter to /main-template which is only template with child route
router.beforeEach((to, from, next) => {
  if (to.path === "/main-template") {
    next("/habit-feed");
  } else {
    next();
  }
});

//redirect to loginpage when non user login to login only pages
router.beforeEach(async (to, from, next) => {
  //loading spinner add
  document.body.appendChild(loadingSpinnerInstance.$el);
  let isAuthenticated = await isUserLoggedIn();

  if (to.path === "/habit-feed" && !isAuthenticated) {
    //loading spinner remove
    document.body.removeChild(loadingSpinnerInstance.$el);
    next("/"); // Redirect to login page
  } else {
    next(); // Allow navigation to the requested route
  }
});

//guard login route / if user is already logged in
router.beforeEach(async (to, from, next) => {
  //auth check
  let isAuthenticated = await isUserLoggedIn();

  if (to.path === "/" && isAuthenticated) {
    next("/habit-feed");
  } else {
    document.body.removeChild(loadingSpinnerInstance.$el);
    next();
  }
});

export default router;
