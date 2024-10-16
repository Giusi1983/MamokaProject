<template>
  <NavBar />
  <Login />
  <MovieList />
  <EditorMovie />
</template>

<script>
import NavBar from "./components/NavBar.vue";
import MovieList from "./components/MovieList.vue";
import EditorMovie from "./components/EditorMovie.vue";
import Login from "./components/Login.vue";

export default {
  name: "App",
  components: {
    NavBar,
    Login,
    MovieList,
    EditorMovie,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
