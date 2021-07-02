<template>  
  <v-navigation-drawer
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
</template>
<script>
export default {
  name:'dashboard',
   data () {
      return {
        me: require('../assets/me.png'),
        drawer: true,
        items: [
          { title: 'Página inicial', icon: 'mdi-home', action:()=>{ this.$router.push('/dashboard')}},
          { title: 'Minha conta', icon: 'mdi-account', action:()=>{ this.$router.push('/profile')}},
          { title: 'Edificios', icon: 'mdi-city', action:()=>{ this.$router.push('/edificio')} },
          { title: 'Sair', icon: 'mdi-logout', action:()=>{ this.$router.push('/')} },
         
        ],
        mini: true,
      }
     
    },

    methods:{
      logOut(){
        this.$router.push('/')
      },

      modal(){

      }
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
