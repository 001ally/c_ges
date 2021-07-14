<template>
  <div class="dasboard">
    <h1>Dashboard</h1>
    <h2>Bem-vindo/a {{ name }}</h2>
  
  </div>
</template>
<script>
export default {
  data: () => ({
    dialog: false,

    name: JSON.parse(localStorage.getItem('user')).name,
    
  }),
  methods:{
   
    logOut(){
      
    }
  }
};
</script>
<style >
.dasboard {
  margin-top: 80px;
  margin-left: 280px;
  align-items: center;
  justify-content: center;
}
</style>