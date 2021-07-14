<template>
  <div class="adm">
    <v-sheet
      color="white"
      elevation="14"
      height="50"
      width="2550">
    </v-sheet>

    <v-container class="grey lighten-3" id="login-page">
      <v-row class="d-flex justify-center">
        <v-col cols="6">
          <v-img src="../assets/logosf.png" width="" id="logo"></v-img>
          <v-tabs
            fixed-tabs
            background-color="blue-grey lighten-5"
            color="black"
            v-model="tabsForm"
          >
            <v-tab key="register"> Cadastrar </v-tab>

            <v-tab key="login"> Fazer Login </v-tab>
          </v-tabs>
        </v-col>
      </v-row>
      <v-row class="d-flex justify-center">
        <v-col cols="4">
          <v-tabs-items v-model="tabsForm" cols="3">
            <v-tab-item key="register">
              <v-form class="text-center grey lighten-3"
              ref="form"
              >
                <v-text-field
                  v-model="name"
                  label="Name"
                  :rules="nameRules"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="email"
                  label="Email"
                  :rules="emailRules"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="password"
                  label="Senha"
                  type="password"
                  :rules="passwordRules"
                  required
                ></v-text-field>

                <v-btn
                  color="success"
                  class="justify-space-between"
                  @click="Registrar()"
                >
                  Registrar
                </v-btn>
              </v-form>
            </v-tab-item>
            <v-tab-item key="login">
              <v-form class="text-center grey lighten-3">
                <v-text-field
                  v-model="email"
                  label="Email"
                  :rules="emailRules"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="password"
                  label="Senha"
                  type="password"
                  :rules="passwordRules"
                  required
                ></v-text-field>

                <v-btn color="primary" class="justify-space-between" @click="Acessar()">
                  Acessar
                </v-btn>
              </v-form>
            </v-tab-item>
          </v-tabs-items>
        </v-col>
      </v-row>
      <router-link to=""/>
    </v-container>
  </div>
</template>
<style scoped>
#login-page {
  margin-top: 10px;
}
#logo {
  margin: 20px 0;
}

</style>
<script>

import {login, registro} from '../api/auth'

export default {
  name: "app",
  data: () => ({
    name:'',
    email:'',
    password:'',
    tabsForm: null,
    nameRules: [
      (value) => !!value || "O nome é obrigatório",
      (value) =>
        (value && value.length >= 5) ||
        "O nome deve ter no mínimo 5 caracteres"
     
    ],
    emailRules: [
      (value) => !!value || "O e-mail é obrigatório",
      (value) => /.+@.+\..+/.test(value) || "O e-mail não é válido",
    ],
    passwordRules: [
      (value) => !!value || "A senha é obrigatória",
      (value) =>
        (value && value.length >= 5) ||
        "A senha deve ter no mínimo 5 caracteres",
    ],
    Registro: [],
    newRegistro: {
      id:0,
      name: null,
      email: null,
      password: null
    },
  }),
  methods: {
    Registrar() {
     
      if (this.name, this.email, this.password == 0 ) {
        console.error('erro')
        alert('preencha todos os campos')
        throw new Error("name can't be null ");
        
      }
     registro(this.name, this.email, this.password).then(res =>{
       console.log(res.data);
       alert('usuario cadastrado com sucesso')
       location.reload()
     })
    },

    Acessar(){ 
       if ( this.email, this.password == 0 ) {
        console.error('erro')
        alert('preencha todos os campos')
        throw new Error("name can't be null ");
        
      }
      
     login(this.email,this.password).then((response) =>{
       console.log(response.data)
    
       localStorage.setItem('token', response.data.token)
       localStorage.setItem('user', JSON.stringify(response.data.user))

       this.$router.push({name: 'dashboard'})
     }).catch( error => {
       //alert(error.Error)
       console.log(error.response.data.Error);
       alert('Dados inseridos incorrectos ou campos vazios')
     })
    }
  },
};
</script>