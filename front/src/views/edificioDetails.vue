<template>
  <div class="edificioDetails">
    <div class="top">
      <div class="topContent">
        <b>D24-</b>
        <b>Centralidade do kilamba</b>
      </div>
      <div class="btn">
        <v-btn color="primary">Gerar apartamentos</v-btn>
        <v-btn color="green white--text">Criar apartamento</v-btn>
        <v-btn color="orange white--text" @click="finance()">Finanças</v-btn>
      </div>
    </div>
    <h3>Apartamentos</h3>
    <br />
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
        :items="apartamentos"
        :search="search"
      ></v-data-table>
    </v-card>
  </div>
</template>
<script>
import axios from "axios";
export default {
  created() {
    var edificioId = this.$route.params.edificioId;

    console.log(edificioId);

    axios
      .get("http://localhost:1000/api/v1/apartamento/" + edificioId, null)
      .then(
        (response) => {
          this.apartamentos = response.data;
          console.log(response.data);
        },
        (error) => {
          console.log(error);
        }
      );
  },
  data() {
    return {
      apartamentos: [],
      search: "",
      headers: [
        {
          text: "Morador",
          align: "start",
          filterable: false,
          value: "name",
        },
        { text: "Contacto", value: "numerofixo" },
        { text: "Propietário", value: "fat" },
        { text: "Andar", value: "andar" },
        { text: "Nº Porta ", value: "numero" },
        { text: "Status", value: "iron" },
      ],
    };
  },
  methods: {
    finance() {
      var edificioId = this.$route.params.edificioId;
      this.$router.push("/finance/" + edificioId);
      
    },
  },
};
</script>
<style>
.edificioDetails {
  margin-left: 260px;
  margin-top: 80px;
}

.top {
  display: flex;
  justify-content: space-between;
}
button {
  margin: 5px;
}
</style>