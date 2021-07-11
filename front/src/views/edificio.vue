<template>
  <div class="edificio">
    <h1>Edificios</h1>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">
          <v-icon left> mdi-city </v-icon> criar edificio
        </v-btn>
      </template>
      <div class="body">

      <v-card>
        <v-card-title>
          <span class="text-h5">Edificio</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-file-input
                accept="image/png, image/jpeg, image/bmp"
                placeholder=""
                prepend-icon="mdi-camera"
                label="imagem edificio"
                v-model="fotografia"
              >
              </v-file-input>
              <v-text-field></v-text-field>

              <v-col cols="12">
                <v-text-field 
                label="Nome do edificio" 
                required
                v-model="nome"></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-text-field 
                label="localização"
                v-model="localizacao"
                > </v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Close
          </v-btn>
          <v-btn color="blue darken-1" text @click="save">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
      </div>
    </v-dialog>
    <v-divider></v-divider>
    <div class="cards">
      <v-card
        class="mx-auto"
        max-width="344"
        outlined
        v-for="edificio in edificios"
        :key="edificio.idedificio"
      >
        <v-list-item three-line>
          <v-list-item-content>
            <div class="text-overline mb-4">Edificio</div>
            <v-list-item-title class="text-h5 mb-1">
              {{ edificio.nome }}
            </v-list-item-title>
            <v-list-item-subtitle>{{
              edificio.fotografia
            }}</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
        </v-list-item>

        <v-card-actions>
          <v-btn
            outlined
            rounded
            text
            v-model="edificioDetails"
            @click="edificioDetails(edificio)"
          >
            ver mais
          </v-btn>
        </v-card-actions>
      </v-card>
      
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  created() {
    let user = localStorage.getItem("user");
    this.token = localStorage.getItem("token");

    if (user) {
      user = JSON.parse(user);
    }

    console.log(user);

    axios
      .get("http://localhost:1000/api/v1/edificio/" + user.iduser, null)
      .then(
        (response) => {
          this.edificios = response.data;
          console.log(response.data);
        },
        (error) => {
          console.log(error);
        }
      );
  },
  data() {
    return {
      fotografia: "",
      nome: "",
      localizacao: "",

      dialog: false,
      edificios: [],
    };
  },

  methods: {
    edificioDetails(edificio) {
      this.$router.push("/edificioDetails/" + edificio.idedificio);
    },
    save() {
      axios
        .post(
          "http://localhost:1000/api/v1/edificio/",
          {
            fotografia: this.fotografia,
            nome: this.nome,
            localizacao: this.localizacao,
          },
          {
            headers: {
              Authorization: "Bearer " + this.token,
            },
          }
        )
        .then(
          (response) => {
            console.log(response.data);
            this.dialog = false;
            // limparr os campos do input
            this.edificios.push(response.data);
            this.edificios = "";
          },
          (error) => {
            console.log(error);
          }
        );
    },
  },
  computed: {},
};
</script>
<style scoped>
.edificio {
  
  margin-top: 80px;
  margin-left: 280px;
  align-items: center;
  justify-content: center;
}
.cards {
  display: flex;
  margin: 20px;
}

* {
  display: flex;
  flex-wrap: wrap;
  margin: 15px;
}
</style>