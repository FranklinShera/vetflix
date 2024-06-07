import { createMemoryHistory, createRouter } from "vue-router";

import Movie from "./components/Movie.vue";
import MoviesHome from "./components/MoviesHome.vue";

const routes = [
  { path: "/:title", component: Movie },
  { path: "/", component: MoviesHome },
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
