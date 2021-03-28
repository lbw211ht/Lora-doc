import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
const workStation = ()=>import('../views/workStation.vue')
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: '/workStation',
    name: 'workStation',
    component:workStation
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
