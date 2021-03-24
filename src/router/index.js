import { createRouter, createWebHistory } from "vue-router";
import LandingProduct from "../views/LandingProduct.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: LandingProduct,
  },
  {
    path: "/cart",
    name: "Cart-Details",
    component: () =>
      import("../views/CarDetailsPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
