<template>
  <nav class="navbar">
    <div class="navbar-brand"></div>
    <ul class="navbar-menu">
      <li><router-link to="/">Login</router-link></li>
      <li><router-link to="/movieList">MovieList</router-link></li>
      <li><router-link to="/EditorMovie">Editor</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style>
.navbar {
  display: flex;
  justify-content: space-between;
  background-color: #42b983;
  padding: 1rem;
}

.navbar-menu {
  list-style-type: none;
  display: flex;
}

.navbar-menu li {
  margin-left: 1rem;
}
</style>
