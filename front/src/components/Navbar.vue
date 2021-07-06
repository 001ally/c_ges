<template>
  <v-app-bar
    app
    v-if="this.$router.history.current.fullPath != '/'"
    clipped-left
  >
    <v-toolbar>
      <v-toolbar-title class="text-uppercase">
        <v-app-bar-nav-icon
          v-model="drawer"
          @click="drawer = true"
        ></v-app-bar-nav-icon>
        <span class="font-weight-light">C_</span>
        <span>ges</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="logOut()" text>
        <span>Sair</span>
      </v-btn>
    </v-toolbar>
  </v-app-bar>
</template>
<script>
export default {
  name: "dashboard",

  data() {
    return {
      drawer: false,
    };
  },

  methods: {
    logOut() {
      this.$router.push("/");
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
