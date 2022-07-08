import { createRouter, createWebHistory } from "vue-router";

// Routes
import Home from "../views/Home.vue";
import Gallery from "../views/Gallery.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/galeri",
    component: Gallery,
  },
];

export default createRouter({
  routes,
  history: createWebHistory(),
});
