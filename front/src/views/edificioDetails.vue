<template>
  <div class="edificioDetails">
    <div class="top">
      <div class="topContent"></div>
      <div class="btn">
        <!-- <v-btn color="primary">Gerar apartamentos</v-btn> -->
        <v-dialog v-model="dialog" persistent max-width="600px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="green white--text" dark v-bind="attrs" v-on="on">
              <v-icon left> mdi-home </v-icon> criar apartamento
            </v-btn>
          </template>
          <div class="body">
            <v-card>
              <v-card-title>
                <span class="text-h5">Criar apartamento</span>
              </v-card-title>
              <v-form ref="form">
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12">
                        <v-text-field
                          label="nome do morador"
                          required
                          v-model="apartamento.proprietario"
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12">
                        <v-text-field
                          label="contacto do morador"
                          required
                          v-model="apartamento.numerofixo"
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12">
                        <v-text-field
                          label="andar"
                          required
                          v-model="apartamento.andar"
                        ></v-text-field>
                      </v-col>

                      <v-text-field
                        label="Nº da porta"
                        required
                        v-model="apartamento.numero"
                      ></v-text-field>
                    </v-row>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="blue darken-1"
                    text
                    @click="(dialog = false), reset()"
                  >
                    Close
                  </v-btn>
                  <v-btn color="blue darken-1" text @click="save"> Save </v-btn>
                </v-card-actions>
              </v-form>
            </v-card>
          </div>
        </v-dialog>
        <v-btn color="orange white--text" @click="finance()">
          <v-icon left> mdi-finance </v-icon>
          Finanças</v-btn
        >
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

      <v-data-table :headers="headers" :items="apartamentos" :search="search">
        <template v-slot:item.actions="{ item }">
          <v-icon
            small
            @click="adicionarPagamento(item)">
            mdi-cash
          </v-icon>
        </template>
      </v-data-table>
    </v-card>
    <v-dialog v-model="dialogue" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn small v-bind="attrs" v-on="on" class="btn-pay">
          Adicionar pagamento
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Payment</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-text-field
                label="valor do pagamento"
                :counter="10"
                required
                v-model="pagamento.valor"
              ></v-text-field>
            </v-row>
            <v-row>
              <v-text-field label="nome do morador"
              v-model="pagamento.nome"
              ></v-text-field>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-menu
                  ref="menu"
                  v-model="menu"
                  :close-on-content-click="false"
                  :return-value.sync="date"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                > {{pagamento.data}}
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="pagamento.data"
                      label="Picker in menu"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="pagamento.data" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="menu = false">
                      Cancel
                    </v-btn>
                    <v-btn
                      text
                      color="primary"
                      @click="$refs.menu.save(data)"
                    >
                      ok
                    </v-btn>
                  </v-date-picker>
                </v-menu>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialogue = false">
            Close
          </v-btn>
          <v-btn color="blue darken-1" text @click="guardarPagamento">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
      apartamentoPagamento: null,
      dialogue: false,
      data: null,
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      menu: false,
      pagamento: {
        //edificio_idedificio: this.$route.params.edificioId,
        nome:null,
        valor: null,
        data: null,
      },
      apartamento: {
        edificio_idedificio: this.$route.params.edificioId,
        proprietario: null,
        andar: null,
        numero: null,
        numerofixo: null,
      },
      dialog: false,
      apartamentos: [],

      search: "",
      headers: [
        {
          text: "Morador",
          align: "start",
          filterable: false,
          value: "proprietario",
        },
        { text: "Contacto", value: "numerofixo" },
        { text: "Andar", value: "andar" },
        { text: "Nº Porta ", value: "numero" },
        { text: "", value: 'actions', sortable: false}
      ],
    };
  },
  methods: {
    adicionarPagamento (apartamento) {
      console.log(apartamento)
      this.apartamentoPagamento = apartamento
      this.pagamento = {
        //edificio_idedificio: this.$route.params.edificioId,
        
        nome:apartamento.proprietario,
        valor: null,
        data: null,
      }
      this.dialogue = true
    },
    guardarPagamento() {
      var gt = this;
      axios.post(`http://localhost:1000/api/v1/pagamento`).then(
        (response) => {
          console.log(response);
          gt.getPayments();
          gt.dialog = false;
          gt.reset();
        },
        (error) => {
          console.log(error);
        }
      );
    },
    reset() {
      this.$refs.form.reset();
    },
    finance() {
      var edificioId = this.$route.params.edificioId;
      this.$router.push("/finance/" + edificioId);
    },
    save() {
      axios
        .post(`http://localhost:1000/api/v1/apartamento `, {
          edificio_idedificio: this.$route.params.edificioId,
          proprietario: this.apartamento.proprietario,
          andar: this.apartamento.andar,
          numero: this.apartamento.numero,
          numerofixo: this.apartamento.numerofixo,
        })
        .then(
          (response) => {
            console.log(response);
            //self.save();
            this.dialog = false;
            window.location.reload();
          },
          (error) => {
            console.log(error);
          }
        );
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