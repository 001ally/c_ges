<template>
  <div class="finance">
    <div class="row">
      <div class="col-lg-4">
        <v-card>
          <v-card-text>
            <p class="text-h6 green white--text">Pagamentos dos moradores</p>
          </v-card-text>
          <p class="text-h5 green--text">{{ totalPagamentos }}</p>
        </v-card>
        <br />

        <br />
        <br />
        <v-data-table
          :headers="headersPagamentos"
          :items="pagamentos"
          :items-per-page="5"
          class="elevation-1"
        >
        </v-data-table>
      </div>

      <div class="col-lg-5">
        <v-card>
          <v-card-text>
            <p class="text-h6 red white--text">Despesas</p></v-card-text
          >
          <p class="text-h5 red--text">{{ totalDespesas }}</p>
        </v-card>
        <br />
        <v-dialog v-model="dialog" persistent max-width="600px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn dark v-bind="attrs" v-on="on" class="btn-despesa">
              Guardar Despesa
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">Criar despesa</span>
            </v-card-title>
            <v-form ref="form">
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-text-field
                      v-model="despesa.tipodespesa"
                      label="Tipo de despesa"
                      required
                    >
                    </v-text-field>
                  </v-row>
                  <v-row>
                    <v-text-field
                      v-model="despesa.valor"
                      :counter="10"
                      label="Valor da despesa"
                    ></v-text-field>
                  </v-row>
                  <v-row>
                    <v-textarea
                      v-model="despesa.descricao"
                      label="Descreva o que pretende pagar"
                      filled
                      name="input-7-4"
                      value=""
                    >
                    </v-textarea>

                    <v-input
                      v-model="despesa.valor"
                      type="number"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="50.000"
                    />

                    <v-col cols="12">
                      <v-menu
                        ref="menu"
                        v-model="menu"
                        :close-on-content-click="false"
                        :return-value.sync="date"
                        transition="scale-transition"
                        offset-y
                        min-width="auto"
                      >
                        {{ despesa.data }}
                        <template v-slot:activator="{ on, attrs }">
                          <v-text-field
                            v-model="despesa.data"
                            label="Picker in menu"
                            prepend-icon="mdi-calendar"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                          ></v-text-field>
                        </template>
                        <v-date-picker
                          v-model="despesa.data"
                          no-title
                          scrollable
                        >
                          <v-spacer></v-spacer>
                          <v-btn text color="primary" @click="menu = false">
                            Cancel
                          </v-btn>
                          <v-btn
                            text
                            color="primary"
                            @click="$refs.menu.save(date)"
                          >
                            OK
                          </v-btn>
                        </v-date-picker>
                      </v-menu>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
            </v-form>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="(dialog = false), reset()"
              >
                Close
              </v-btn>
              <v-btn color="blue darken-1" text @click="guardarDespesa">
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <br />
        <br />
        <div class="despesas-table">
          <v-data-table
            :headers="cabecalho"
            :items="despesas"
            :items-per-page="5"
            class="elevation-1"
          ></v-data-table>
        </div>
      </div>
      <br />

      <div class="col-lg-3">
        <v-card>
          <v-card-text>
            <p class="text-h6 blue white--text">Saldo disponivel</p>
          </v-card-text>
          <p class="text-h5 blue--text">{{ totalPagamentos - totalDespesas  }}</p>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  created() {
    this.getDespesas();
    this.getPayments();
  },
  data() {
    return {
      data: null,
      pagamento: {
        //edificio_idedificio: this.$route.params.edificioId,
        nome: null,
        valor: null,
        data: null,
      },
      despesa: {
        edificio_idedificio: this.$route.params.edificioId,
        descricao: null,
        data: null,
        valor: null,
        tipodespesa: null,
      },
      despesas: [],
      pagamentos: [],
      headersPagamentos: [
        {
          text: "Valor Pagamento",
          align: "start",
          sortable: false,
          value: "valor",
        },
        { text: "Nome do morador", value: "morador" },
        { text: "Data pagamento", value: "data" },
      ],
      desserts: [
        {
          name: 10000,
          calories: "Alicia Pereira",
          fat: "03/06/2021",
        },
      ],
      cabecalho: [
        {
          text: "Tipo de despesa",
          align: "start",
          sortable: false,
          value: "tipodespesa",
        },
        { text: "valor da despesa", value: "valor" },
        { text: "Data ", value: "data" },
      ],
      expenses: [
        {
          name: "Elevadores",
          valorDespesa: 100000,
          dat: "05/06/2021",
        },
      ],
      dialog: false,
      dialogue: false,
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      menu: false,
    };
  },

  methods: {
    reset() {
      this.$refs.form.reset();
    },
    getDespesas() {
      var edificioId = this.$route.params.edificioId;
      console.log(edificioId);
      axios
        .get("http://localhost:1000/api/v1/despesa/" + edificioId, null)
        .then(
          (response) => {
            this.despesas = response.data;
            console.log(response.data);
          },
          (error) => {
            console.log(error);
          }
        );
    },
    getPayments() {
      console.log(this.$route.params);
      var edificioId = this.$route.params.edificioId;
      console.log(edificioId);
      axios
        .get("http://localhost:1000/api/v1/pagamento/" + edificioId, null)
        .then(
          (response) => {
            this.pagamentos = response.data;
            console.log(response.data);
          },
          (error) => {
            console.log(error);
          }
        );
    },

    edificioDetails() {},
    guardarPagamento() {
      var gt = this;
      axios.post(`http://localhost:1000/api/v1/pagamento`).then(
        (response) => {
          console.log(response);
          // gt.getPayments();
          gt.dialog = false;
          //gt.reset();
        },
        (error) => {
          console.log(error);
        }
      );
    },
    guardarDespesa() {
      var self = this;
      axios.post(`http://localhost:1000/api/v1/despesa `, this.despesa).then(
        (response) => {
          console.log(response);
          self.getDespesas();
          self.dialog = false;
          self.reset();
        },
        (error) => {
          console.log(error);
        }
      );
    },
  },
  computed: {
    totalDespesas() {
      let acumDespesas = 0;
      for (var i = 0; i < this.despesas.length; i++) {
        acumDespesas += this.despesas[i].valor;
      }
      return acumDespesas;
    },
    totalPagamentos() {
      let acumPagamentos = 0;
      for (var i = 0; i < this.pagamentos.length; i++) {
        acumPagamentos += this.pagamentos[i].valor;
      }
      return acumPagamentos;
    },

    saldo() {
       
   
   
    },
  },
};
</script>


<style scoped>
.finance {
  margin-left: 260px;
  margin-top: 80px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  /* despesas-style-type: none; */
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.v-card {
  text-align: center;
  padding: 50px;
}
.v-btn:not(.v-btn--round).v-size--default {
  margin-left: 125px;
}
</style>
