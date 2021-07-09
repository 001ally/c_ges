<template>
  <div class="dasboard">
    <h1>Dashboard</h1>
    <h2>Bem-vindo/a {{ name }}</h2>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">
          <v-icon left> mdi-city </v-icon> criar edificio
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Edificio</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-file-input
                
                accept="image/png, image/jpeg, image/bmp"
                placeholder="Pick an avatar"
                prepend-icon="mdi-camera"
                label="imagem edificio"
              ></v-file-input>
              <v-text-field></v-text-field>

              <v-col cols="12">
                <v-text-field label="Nome do edificio" required></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-text-field
                  label="localização"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Close
          </v-btn>
          <v-btn  color="blue darken-1" text @click="save(), dialog=false">
            Save
            
          </v-btn>
           
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  data: () => ({
    dialog: false,

    name: JSON.parse(localStorage.getItem('user')).name,
  }),
  methods:{
    save(){
      alert('Edificio cadastrado com sucesso')
      
    },
    logOut(){
      
    }
  }
};
</script>
<style >
.dasboard {
  margin-top: 80px;
  margin-left: 280px;
  align-items: center;
  justify-content: center;
}
</style>