<template>
  <v-app-bar
    app
    v-if="this.$router.history.current.fullPath != '/'"
    clipped-left
  >
    <v-toolbar>
      <v-toolbar-title class="text-uppercase">
        <v-icon
          
        > mdi-city</v-icon>
        <span class="font-weight-light">C_</span>
        <span>ges</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="logOut" text>
        <span>Sair</span>
      </v-btn>
    </v-toolbar>
  </v-app-bar>
</template>
<script>
import axios from "axios";
export default {
  name: "dashboard",

  data() {
    return {
      drawer: false,
    };
  },

  methods: {
    logOut() {
       axios.get("http://localhost:1000/api/v1/logout" , null)
      .then(
        (response) => {
          this.edificios = response.data;
          console.log(response.data);
        },
        (error) => {
          console.log(error);
        }
      );
      // this.$router.push("/");
      // location.reload()
    },
  },
};
</script>

<style scoped>
.content {
  margin: 150px;
  text-align: center;
}
button {
  margin: 5px;
}
</style>
