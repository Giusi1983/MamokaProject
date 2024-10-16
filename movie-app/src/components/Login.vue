<template>
  <div class="login-container">
    <h1>Login</h1>
    <form @submit.prevent="handleLogin">
      <div>
        <label for="username">Nome Utente</label>
        <input v-model="username" id="username" type="text" required />
      </div>
      <div>
        <label for="password">Password</label>
        <input v-model="password" id="password" type="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login-container {
  max-width: 300px;
  border: 1px solid gray;
  margin: 50px auto;
}

#username,
#password {
  margin-left: 10px;
}
</style>
