<template>
  <div class="container">
      <!-- <v-img src="../assets/logosf.png" width="" id="logo" class="img" ></v-img> -->
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md3>
        <div style="text-align:center"><img src="../assets/logosf.png" width="200" alt="logo"></div>
        <v-card class="card"> 
          <v-card-title> Login </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <v-text-field type="email" label="Email"></v-text-field>
            <v-text-field type="password" label="Password"></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="info" tile>Registrar</v-btn>
            <v-btn color="primary" tile 
            @click="dashboard">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
export default {
  data(){

  },
  methods:{
    dashboard(){
      this.$router.push({name: 'dashboard'})
    }
  }
}
</script>
<style scoped>

</style>