<template>
  <div class="finance">
    <div class="row">
      <div class="col-lg-4">
        <v-card>
          <v-card-text>
            <p class="text-h6 green white--text">Pagamentos dos moradores</p>
          </v-card-text>
          <p class="text-h5 green--text">500.000 AKZ</p>
        </v-card>
        <br />
        <v-dialog v-model="dialogue" persistent max-width="600px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn dark v-bind="attrs" v-on="on" class="btn">
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
                    v-model="payment"
                    :rules="payRules"
                    label="valor do pagamento"
                    :counter="10"
                    required
                  ></v-text-field>
                </v-row>
                <v-row>
                  <v-text-field
                    v-model="morador"
                    :rules="moradorRules"
                    label="nome do morador"
                  ></v-text-field>
                </v-row>
                <v-row>
                  <v-input
                    v-model="newDespesa.valor"
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
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="data"
                          label="Picker in menu"
                          prepend-icon="mdi-calendar"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker v-model="data" no-title scrollable>
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
              <v-btn color="blue darken-1" text @click="dialogue = false">
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <br />
        <br />
        <v-data-table
          :headers="headers"
          :items="desserts"
          :items-per-page="5"
          class="elevation-1"
        ></v-data-table>
      </div>

      <div class="col-lg-5">
        <v-card>
          <v-card-text>
            <p class="text-h6 red white--text">Despesas</p></v-card-text
          >
          <p class="text-h5 red--text">500.000 AKZ</p>
        </v-card>
        <br />
        <v-dialog v-model="dialog" persistent max-width="600px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn dark v-bind="attrs" v-on="on" class="btn-despesa">
              Guardar Despesa
            </v-btn>
          </template>
          <v-card
          v-for="despesa in despesas"
          :key="despesa.iddespesa"
          >
            
            <v-card-title>
              <span class="text-h5">Criar despesa</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-text-field
                    v-model="tipoDespesa"
                    :rules="nameRules"
                    label="Tipo de despesa"
                    required
                  > {{ despesa.tipodespesa}}</v-text-field>
                </v-row>
                <v-row>
                  <v-text-field
                    v-model="valor"
                    :counter="10"
                    :rules="valorRules"
                    label="Valor da despesa"
                  ></v-text-field>
                </v-row>
                <v-row>
                  <v-textarea
                    label="Descreva o que pretende pagar"
                    filled
                    name="input-7-4"
                    value=""
                  > {{despesa.descricao}}
                  </v-textarea>

                  <v-input
                    v-model="newDespesa.valor"
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
                    > {{despesa.data}}
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="date"
                          label="Picker in menu"
                          prepend-icon="mdi-calendar"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker v-model="date" no-title scrollable>
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
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="dialog = false">
                Close
              </v-btn>
              <v-btn color="blue darken-1" text @click="dialog = false">
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
            :items="expenses"
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
          <p class="text-h5 blue--text">500.000 AKZ</p>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  created() {
    var edificioId = this.$route.params.edificioId;

    console.log(edificioId);

    axios.get("http://localhost:1000/api/v1/despesa/" + edificioId , null)
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
  data() {
    return {
      despesas: [],
      headers: [
        {
          text: "Valor Pagamento",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Nome do morador", value: "calories" },
        { text: "Data pagamento", value: "fat" },
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
          text: "tipo de despesa",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "valor da despesa", value: "valorDespesa" },
        { text: "Data ", value: "dat" },
      ],
      expenses: [
        {
          name: "Elevadores",
          valorDespesa: 100000,
          dat: "05/06/2021",
        }
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
     
    },
  computed: {},
  }
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
