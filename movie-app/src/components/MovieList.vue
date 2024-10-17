<template>
  <div class="container mx-aut0 p-4">
    <h1 class="text-3xl font-bold underline mb-4">My Movies Library</h1>
    <div class="overflow-x-auto">
      <table class="min-w-full bg-white border border-gray-200">
        <thead>
          <tr class="bg-gray-100 border-b border-gray-200">
            <th class="px-4 py-2 border">ID</th>
            <th class="px-4 py-2 border">Year</th>
            <th class="px-4 py-2 border">Title</th>
            <th class="px-4 py-2 border">Category</th>
            <th class="px-4 py-2 border">Available</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(movie, index) in movies"
            :key="index"
            class="hover:bg-gray-50"
          >
            <td class="px-4 py-2 border">{{ movie.id }}</td>
            <td class="px-4 py-2 border">{{ movie.year }}</td>
            <td class="px-4 py-2 border">{{ movie.title }}</td>
            <td class="px-4 py-2 border">{{ movie.category }}</td>
            <td class="px-4 py-2 border"></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { ref, onMounted } from "vue";
import axios from "axios";

export default {
  name: "MovieList",
  setup() {
    const router = useRouter();
    const movies = ref([]);
    const token = localStorage.getItem("authToken");

    if (!token) {
      router.push({ name: "Login" });
    }

    const getMovies = async () => {
      try {
        const response = await axios.get(
          "https://kamaji2.dev.netbuilder.it/00900000/movies"
        );
        movies.value = response.data;
      } catch (error) {
        console.error(error);
      }
    };

    onMounted(() => {
      getMovies();
    });
    return {
      movies,
    };
  },
};
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
