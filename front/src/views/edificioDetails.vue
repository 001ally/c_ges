<template>
<div class="edificioDetails">
<b>D24</b> <br>
<b>Centralidade do kilamba</b> <br>
<v-btn>criar apartamento</v-btn>
<v-btn>Finanças</v-btn>
<!-- <v-btn>Despesas</v-btn>
<v-btn>Pagamentos</v-btn> -->
<h3>Apartamentos</h3>
  <v-card>
    <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :search="search"
    ></v-data-table>
  </v-card>
  
</div>
</template>
<script>
  export default {
    data () {
      return {
        search: '',
        headers: [
          {
            text: 'Morador',
            align: 'start',
            filterable: false,
            value: 'name',
          },
          { text: 'Contacto', value: 'calories' },
          { text: 'Propietário', value: 'fat' },
          { text: 'Andar', value: 'carbs' },
          { text: 'Nº Porta ', value: 'protein' },
          { text: 'Status', value: 'iron' },
        ],
        desserts: [
          {
            name: 'Eliane dos Santos',
            calories: '+244 925 684 321',
            fat:'Domingos Correia',
            carbs: '2',
            protein: '24',
            iron: 'Activado',
          }
        ],
      }
    },
  }
</script>