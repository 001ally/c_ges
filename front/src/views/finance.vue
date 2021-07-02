<template>
<div class="finance">
 <div class="row">
    <div class="col-lg-4">
      <h3>Despesas</h3>
      <br />
      <form>
        <div class="form-group">
          <v-select
          label="seleccione o tipo de despesa"
          >
           
          </v-select>
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Descrição</label>
          <textarea
            v-model="newDespesa.descricao"
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="2"
            placeholder="Descreva o que pretende pagar este mês"
          ></textarea>
        </div>

        <div class="form-group">
          <label for="exampleFormControlInput1">valor da dívida</label>
          <input
            v-model="newDespesa.valor"
            type="number"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="50.000"
          />
        </div>
        <div class="form-group">
          <label for="example-date-input" class="col-2 col-form-label"
            >Date</label
          >
          <div class="col-10">
            <input
              v-model="newDespesa.dat"
              class="form-control"
              type="date"
              value="2011-08-19"
              id="example-date-input"
            />
          </div>
        </div>
        <br />
        <button
          type="button"
          class="btn btn-primary btn-sm"
          @click="addDespesa()">
          Guardar despesa
        </button>
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
								<button @click="edit(despesa)" type="button" class="btn btn-info">Editar</button>	 
								<button @click="remove(despesa)" class="btn btn-danger btn-sm">
									Excluir
								</button>
							</td>
            </tr>
          </tbody>
							<br>		
						<button @click="removeAll()" class="btn btn-danger btn-sm">
									Excluir Tudo
								</button>
        </table>
      </form>
    </div>  <br>
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
			Despesas: [],
      newDespesa: {
        id: 0,
        categoria: null,
        descricao: null,
        valor: null,
        dat: null,
      },
			index:null,		
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
       const idx = this.Despesas.indexOf(despesa)
       this.Despesas.splice(idx, 1) 
      },
		removeAll(){
				return this.Despesas = []
			},
		edit(despesa) {
       this.index= this.Despesas.indexOf(despesa)
       this.newDespesa = Object.assign({}, despesa);
      },
  },
   computed: {
    
  },
}
</script>


<style scoped>
.finance{
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
</style>
