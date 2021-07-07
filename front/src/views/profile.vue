<template>
  <div class="profile">
    <v-card :loading="loading" class="mx-auto my-12" max-width="374">
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>

      <v-img height="250" src="../assets/me.png"></v-img>
      <v-card-subtitle>Nome: Alícia Pereira</v-card-subtitle>
      <v-card-text>Email: ally@gmail.com</v-card-text>
      <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on">
            <v-icon left> mdi-pencil </v-icon> Editar
          </v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="text-h5">User Profile</span>
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
              </v-row>
              <v-row>
                <v-text-field label="name"></v-text-field>

                <v-col cols="12">
                  <v-text-field label="Email*" required></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-text-field
                    label="Password*"
                    type="password"
                    required
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
            <v-btn color="blue darken-1" text @click="dialog = false">
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-divider class="mx-4"></v-divider>
    </v-card>
  </div>
</template>
 
   

<script>
export default {
  data: () => ({
    dialog: false,
    loading: false,
    selection: 1,
  }),
  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
  },
};
</script>

<style scoped>
.profile {
  margin-top: 80px;
  /* margin-left: 180px; 
  align-items: center;
  justify-content: center;*/
}
</style>
