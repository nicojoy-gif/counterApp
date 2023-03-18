import Home from "../HomePage.vue";
import Navbar from '../NavbarPage.vue'
import NotfoundPage from "../NotfoundPage.vue";
import { createWebHistory, createRouter } from "vue-router";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/home", redirect: "/" },
  { path: "/counter", name: "Navbar", component: Navbar },
  { path: "/:catchAll(.*)", name: "NotfoundPage", component: NotfoundPage },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
