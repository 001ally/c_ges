<template>
  <v-app>
    <Navbar 
      v-if="isLoggedIn" />
    <SideMenu 
      v-if="isLoggedIn" />
    <router-view/>
  </v-app>
</template>
<script>
import Navbar from '@/components/Navbar'
import SideMenu from '@/components/SideMenu'
export default {
  name:'App',

  components:{
    Navbar,
    SideMenu
  },

  computed: {
    isLoggedIn () {
      if (this.$route.name == 'adm') {
        return false
      }

      return true
    }
  },

  data () {
    return {

    }
  }
}
</script>

<style>
.v-toolbar__content, .v-toolbar__extension {
    padding: 4px 5px !important;
}
</style>
