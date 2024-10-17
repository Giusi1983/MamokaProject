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
        <tbody></tbody>
      </table>
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
