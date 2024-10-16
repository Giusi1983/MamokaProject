import { createRouter, createWebHistory } from "vue-router";
import Login from "../components/Login";
import MovieList from "../components/MovieList.vue";
import EditorMovie from "../components/EditorMovie.vue";

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/movieList",
    name: "MovieList",
    component: MovieList,
  },
  {
    path: "/editorMovie",
    name: "EditorMovie",
    component: EditorMovie,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
