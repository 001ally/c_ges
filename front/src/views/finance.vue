<template>
  <div class="finance">
    <div class="row">
      <div class="col-lg-4">
        <v-card>
          <v-card-text>Despesas</v-card-text>
          <p class="text-h5 text--primary">500.000 AKZ</p>
        </v-card>
       <v-card-actions>
            <v-btn>Adicionar Tipo de despesa</v-btn> 
             <v-btn> Guardar Despesa</v-btn>
          </v-card-actions>

        <div class="form-group">
          <v-select label="seleccione o tipo de despesa"> </v-select>
        </div>
        <div class="form-group">
          <v-textarea
            label="Descreva com mais detalhes o que pretende pagar(opcional)"
            filled
            name="input-7-4"
            value=""
          >
          </v-textarea>
        </div>

        <div class="form-group">
          <v-input
            v-model="newDespesa.valor"
            type="number"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="50.000"
          />
        </div>

        <!-- <v-date-picker
              v-model="newDespesa.dat"
              class="form-control"
              type="date"
              value="2011-08-19"
              id="example-date-input"
            /> -->
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
            <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
            <v-btn text color="primary" @click="$refs.menu.save(date)">
              OK
            </v-btn>
          </v-date-picker>
        </v-menu>

        <v-btn
          type="button"
          class="btn btn-primary btn-sm"
          @click="addDespesa()"
        >
          Guardar despesa
        </v-btn>
        <br /><br />
        <table class="table table-dark">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Categoria</th>
              <th scope="col">Descrição</th>
              <th scope="col">valor</th>
              <th scope="col">Data</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(despesa, index) in Despesas" :key="index">
              <th scope="row">{{ despesa.id }}</th>
              <td>{{ despesa.categoria }}</td>
              <td>{{ despesa.descricao }}</td>
              <td>{{ despesa.valor }}</td>
              <td>{{ despesa.dat }}</td>
              <td>
                <button
                  @click="edit(despesa)"
                  type="button"
                  class="btn btn-info"
                >
                  Editar
                </button>
                <button @click="remove(despesa)" class="btn btn-danger btn-sm">
                  Excluir
                </button>
              </td>
            </tr>
          </tbody>
          <br />
          <button @click="removeAll()" class="btn btn-danger btn-sm">
            Excluir Tudo
          </button>
        </table>
      </div>
      <br />
      <div class="col-lg-4">
        <h3>Pagamentos</h3>
      </div>
      <div class="col-lg-4">
        <h3>Saldo disponível</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      menu: false,

      Despesas: [],
      newDespesa: {
        id: 0,
        categoria: null,
        descricao: null,
        valor: null,
        dat: null,
      },
      index: null,
    };
  },

  methods: {
    addDespesa() {
      this.Despesas.push({
        id: this.Despesas.length + 1,
        categoria: this.newDespesa.categoria,
        descricao: this.newDespesa.descricao,
        valor: this.newDespesa.valor,
        dat: this.newDespesa.dat,
      });
      this.newDespesa.categoria = "";
      this.newDespesa.descricao = "";
      this.newDespesa.valor = "";
      this.newDespesa.dat = "";
    },

    remove(despesa) {
      const idx = this.Despesas.indexOf(despesa);
      this.Despesas.splice(idx, 1);
    },
    removeAll() {
      return (this.Despesas = []);
    },
    edit(despesa) {
      this.index = this.Despesas.indexOf(despesa);
      this.newDespesa = Object.assign({}, despesa);
    },
  },
  computed: {},
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
</style>
