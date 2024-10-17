<template>
  <div class="flex items-center justify-center min-h-screen max-w-xs mx-auto">
    <div class="bg-white p-6 rounded-lg shadow-lg max-w-xs min-w-full">
      <h1 class="text-2xl font-bold mb-4 text-center">Login</h1>
      <form @submit.prevent="handleLogin">
        <div class="mb-4">
          <label for="username" class="block text-sm font-medium text"
            >Nome Utente</label
          >
          <input
            v-model="username"
            id="username"
            type="text"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>
        <div class="mb-4">
          <label
            for="password"
            class="block text-sm font-medium text-gray-700 mb-2"
            >Password</label
          >
          <input
            v-model="password"
            id="password"
            type="password"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>
        <button
          type="submit"
          class="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import axios from "axios";
import { ref } from "vue";

export default {
  name: "LoginPage",
  setup() {
    const username = ref("");
    const password = ref("");

    const router = useRouter();
    let response;

    const handleLogin = async () => {
      try {
        response = await axios.post(
          "https://kamaji2.dev.netbuilder.it/00900000/auth",
          {
            username: "giuseppa.prestigiacomo3@gmail.com",
            password: "prestigiacomo3",
            grant_type: "password",
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        console.log("API Response:", response.data);
        const token = response.data.token;
        if (token) localStorage.setItem("authToken", token);
        console.log("Login successful, token stored", token);
        router.push({ name: "MovieList" });
      } catch (e) {
        console.error(e);
      }
    };

    return {
      handleLogin,
      username,
      password,
      router,
    };
  },
};
</script>
