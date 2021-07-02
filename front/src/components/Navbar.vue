<template>  
  <!-- <v-navigation-drawer
        v-model="drawer"
        :mini-variant.sync="mini"
        app
        v-if="this.$router.history.current.fullPath != '/'"
        clipped
      >
      
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img
            :src="me"
          ></v-img>
        </v-list-item-avatar>

            <v-list-item-title>Alícia Pereira</v-list-item-title>

            <v-btn icon @click.stop="mini = !mini">
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
          </v-list-item>

          <v-divider></v-divider>

          <v-list dense>
            <v-list-item v-for="item in items" :key="item.title" link 
            @click="item.action" router :to="item.route">
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>

            </v-list-item>
          </v-list>
  </v-navigation-drawer>
           -->
  <v-app-bar
      app
      v-if="this.$router.history.current.fullPath != '/'"
      clipped-left
    >
    <v-toolbar>
      <v-toolbar-title class="text-uppercase" >
        <v-app-bar-nav-icon v-model="drawer" @click="drawer = true"></v-app-bar-nav-icon>
        <span class="font-weight-light">C_</span> 
        <span>ges</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="logOut()" text>
        <span>Sair</span> 
        
      </v-btn>
      
    </v-toolbar>
  </v-app-bar>
       <!-- <v-main>
         <div class="content">
            <div style="text-align:center">
              <img src="../assets/logosf.png" width="200" alt="logo">
              </div>
            <v-btn @click="modal()">
           criar edificio
         </v-btn> 
        
         </div>
      
    </v-main> -->
</template>
<script>
export default {
  name:'dashboard',
  
  data () {
    return {
      drawer:false
    }
  },

  methods:{
    logOut(){
      this.$router.push('/')
    },

    
  }
}
</script>

<style scoped>
/* .v-toolbar__content, .v-toolbar__extension{
  padding: 0 !important;
} */
.content{
  margin: 150px;
  text-align: center;
}
button {
  margin: 5px;
 

}
</style>
