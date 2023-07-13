import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginRegisterTemplate from "../views/LoginRegisterTemplate.vue";
import HabitFeed from "../views/HabitFeed.vue";
import MainTemplate from "../views/MainTemplate.vue";
import Profile from "../views/Profile.vue";
import LeaderBoard from "../views/LeaderBoard.vue";
import Create from "../views/Create.vue";

const routes = [
  {
    path: "/",
    name: "LoginRegisterTemplate",
    component: LoginRegisterTemplate,
  },
  {
    path: "/habit-feed",
    name: "HabitFeed",
    component: HabitFeed,
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
export default router;
