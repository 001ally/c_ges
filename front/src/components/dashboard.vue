<template>
  <v-app>
  <v-navigation-drawer
        v-model="drawer"
        :mini-variant.sync="mini"
        permanent
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
            @click="item.action">
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>

        </v-navigation-drawer>
          
          <v-app-bar
          app
          v-if="this.$router.history.current.fullPath != '/'"
          clipped-left
        >
        <v-toolbar>
          <v-toolbar-title >
           
          </v-toolbar-title>
          <v-toolbar-items>
              
          </v-toolbar-items>
            
        </v-toolbar>
        </v-app-bar>
        
    
    <v-main>
         
       
      <router-view/>
    </v-main>
  </v-app>
</template>
<script>
export default {
   data () {
      return {
        me: require('../assets/me.png'),
        drawer: true,
        items: [
          { title: 'Home', icon: 'mdi-home-city', action:()=>{} },
          { title: 'My Account', icon: 'mdi-account', action:()=>{} },
          { title: 'Users', icon: 'mdi-account-group-outline',action:()=>{} },
          { title: 'Logout', icon: 'mdi-logout', action:()=>{this.$router.push('/')} }
        ],
        mini: true,
      }
    } 
}
</script>

<style scoped>
.v-toolbar__content, .v-toolbar__extension{
  padding: 0 !important;
}
</style>
