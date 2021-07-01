<template>
<div class="profile">
<h1>Perfil</h1>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="neme"
            :rules="passwordRules"
            :counter="10"
            label="First name"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>
          <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="password"
            :rules="passwordRules"
            :counter="20"
            label="password"
            required
          ></v-text-field>
        </v-col>
        <v-btn >
          save
        </v-btn>
      </v-row>
      
    </v-container>
    
  </v-form>
  </div>
</template>
<script>
  export default {
    data: () => ({
      valid: false,
      neme: '',
      password: '',
      passwordRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
    }),
  }
</script>