<template>
  <div class="movielist">
    <div class="movie-list">
      <h1>hi</h1>
      <div v-for="movie in movies" :key="movie.id" class="movie-table">
        <h2>{{ movie.name }}</h2>
        <p>{{ movie.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
// import { useRouter } from "vue-router";
// import { ref, onMounted } from "vue";
// import axios from "axios";
// import { useStore } from "vuex";

export default {
  name: "MovieList",
  // setup() {
  //   const router = useRouter();
  //   const movies = ref([]);
  //   const token = localStorage.getItem("authToken");

  //   if (!token) {
  //     router.push({ name: "Login" });
  //   }

  // },
};

//     const getMovies = async => {
//       try {
//         const response = await axios.get('https://kamaji2.dev.netbuilder.it/00900000/_categories'), {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           }
//     }
//     movies.value = response.data;
//   }
// };
</script>
<style scoped>
.movie-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}
.movie-table {
  border: 1px solid #ddd;
  padding: 1rem;
}
</style>
