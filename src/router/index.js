import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/HomePage.vue";
import PortfolioPage from "../components/PortfolioPage.vue";
import TestimonialPage from "../components/TestimonialPage.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/Portfolio", component: PortfolioPage },
  { path: "/Testimonial", component: TestimonialPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
