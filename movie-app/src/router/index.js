import { createRouter, createWebHistory } from "vue-router";
import MovieList from "../components/MovieList.vue";
import EditorMovie from "../components/EditorMovie.vue";

const routes = [
  {
    path: "/",
    name: "MovieList",
    component: MovieList,
  },
  {
    path: "/editor/:id",
    name: "EditorMovie",
    component: EditorMovie,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
