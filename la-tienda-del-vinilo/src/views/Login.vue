<template>
  <div class="login-page">
    <h1>Inicio de Sesión</h1>
    <div class="icon-circle">
      <span class="material-symbols-outlined">person</span>
    </div>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="username" style="display: none">Nombre de usuario:</label>
        <input type="text" id="username" v-model="username" placeholder="Nombre de Usuario" required />
      </div>
      <div class="form-group">
        <label for="password" style="display: none">Contraseña:</label>
        <input type="password" id="password" v-model="password" placeholder="Contraseña" required />
      </div>
      <button type="submit">Iniciar</button>
    </form>
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    <div class="page-container">
      <div class="sidebar-image">
        <img src="../assets/viniloos2.png" alt="Imagen lateral" />
      </div>
    </div>
  </div>
</template>
  
<script>
import axios from 'axios';
export default {
  data() {
    return {
      username: "",
      password: "",
      errorMessage: "",
    };
  },
  methods: {
    async login() {
      if (this.username === "admin" && this.password === "admin") {
        this.$router.push("/admin");
      }
      try {
        const response = await axios.post(
          "http://localhost:5000/api/users/login",
          {
            username: this.username,
            password: this.password,
          }
        );

        if (response.status === 202) {
          const userFromDB = response.data;
          if (
            userFromDB.username === this.username &&
            userFromDB.password === this.password
          ) {
            if (this.username === "admin" && this.password === "admin") {
              this.$router.push("/admin");
            } else {
              this.$router.push("/");
            }

            alert("Inicio de sesión exitoso");

          } else {
            this.errorMessage = "Nombre de usuario o contraseña incorrectos";
          }
        } else {
          this.errorMessage = "No se encontró el usuario en la base de datos";
        }
      } catch (error) {
        console.error("Error en el inicio de sesión:", error);
        this.errorMessage =
          "Hubo un problema al iniciar sesión. Por favor, intenta nuevamente.";
      }
    },
  },
};
</script>

<style scoped>
.login-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  left: 30rem;
  align-items: center;
  min-height: 100vh;
}

h1 {
  font-size: 2rem;
  color: var(--grey);
  margin-bottom: 20px;
}

form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 10px;
}

.material-symbols-outlined {
  font-size: 10rem;
  color: var(--dark);
}

.sidebar-image {
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  width: 300px;
  height: 100vh;
}

.sidebar-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.icon-circle {
  text-align: center;
  background-color: var(--primary);
  width: 12rem;
  height: 12rem;
  border-radius: 50%;
  margin: 0 auto 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

label {
  font-weight: bold;
}

input {
  padding: 10px;
  padding-left: 50px;
  padding-right: 50px;
  border: 1px solid var(--grey);
  border-radius: 3px;
  margin-bottom: 12px;
  background-color: var(--primary);
  color: var(--grey);
  transition: border-color 0.2s;
}

button {
  padding: 12px;
  width: 90px;
  background-color: var(--dark-alt);
  color: #fff;
  border: var(--dark);
  border-radius: 3px;
  cursor: pointer;
  margin: auto;
}

.error-message {
  color: red;
  margin-top: 10px;
}
</style>