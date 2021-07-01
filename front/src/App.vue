<template>
  <v-app>
  <Navbar/>
      <router-view to="/edificio"/>
   
  </v-app>
</template>
<script>
import Navbar from '@/components/Navbar'
export default {
  name:'App',
  components:{
    Navbar
  },
   data () {
      return {
  
      }
    } 
}
</script>

<style scoped>

</style>
