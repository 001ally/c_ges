<template>
<div class="edificio"> 

  <h1>Edificios</h1> 
    <v-divider></v-divider>
    <div class="cards">


  <v-card
    class="mx-auto"
    max-width="344"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
         Edificio 
        </div>
        <v-list-item-title class="text-h5 mb-1">
          D24
        </v-list-item-title>
        <v-list-item-subtitle>Centralidade do kilamba</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="grey"
      ></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn
        outlined
        rounded
        text
        v-model="edificioDetails"
        @click="edificioDetails()"
      >
        ver mais
      </v-btn>
    </v-card-actions>
  </v-card>
 <v-card
    class="mx-auto"
    max-width="344"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
         Edificio 
        </div>
        <v-list-item-title class="text-h5 mb-1">
          B19
        </v-list-item-title>
        <v-list-item-subtitle>Centralidade do kilamba</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="grey"
      ></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn
        outlined
        rounded
        text
      >
        ver mais
      </v-btn>
    </v-card-actions>
  </v-card>
   <v-card
    class="mx-auto"
    max-width="344"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
         Edificio 
        </div>
        <v-list-item-title class="text-h5 mb-1">
          H6
        </v-list-item-title>
        <v-list-item-subtitle>Centralidade do kilamba</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="grey"
      ></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn
        outlined
        rounded
        text
      >
        ver mais
      </v-btn>
    </v-card-actions>
  </v-card>
</div>

    
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  
  methods:{
    edificioDetails(){
      this.$router.push('/edificioDetails')
    }
  }
}
</script>
<style scoped>
.edificio {
  margin-top: 80px;
  margin-left: 60px;
  align-items: center;
  justify-content: center;
}
.cards{
  display: flex;
}
</style>