import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginRegisterTemplate from "../views/LoginRegisterTemplate.vue";
import HabitFeed from "../views/HabitFeed.vue";

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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
