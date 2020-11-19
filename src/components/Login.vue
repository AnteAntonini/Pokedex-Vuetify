<template>
  <div class="my-10">
  <h2 class="mb-10">Welcome to Pokémon Trainer Club</h2>
  <v-row style="width: 100%" class="justify-center">
  <v-col  cols="12" md="4">
  <v-form v-model="valid" ref="form" lazy-validation>
    <p>Log In</p>
    <v-container style="height: 350px; width: 100%; background: #f5f5f5">
      <v-row class="ma-auto mt-10">
        <v-col
          cols="12"
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
        >
          <v-text-field
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Password"
            hint="At least 8 characters"
            counter
            @click:append="show1 = !show1"
          ></v-text-field>
          <v-btn to="/" @click="validate" :disabled="!valid" color="#4dad5b" class="button-login white--text mt-5">Log In</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
  </v-col>
  <v-col cols="12" md="4" style="width: 50%">
      <p>Join the Pokémon Trainer Club!</p>
      <v-col style="background: #f5f5f5; height: 350px">
          <p>Create a Pokémon Trainer Club account today! With a Pokémon Trainer Club account, you can manage your Pokemon.com profile, play the Pokémon Trading Card Game Online, and much more!</p>
          <v-btn to="/register" class="button-register white--text px-4 py-5" color="#30a7d7">Create an Account</v-btn>
      </v-col>
  </v-col>
  </v-row>
  </div>
</template>


<script>
  export default {
    name: 'Register',
    data: () => ({
      valid: false,
      firstname: '',
      lastname: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      show1: false,
        password: '',
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => (`The email and password you entered don't match`),
        }, 
    }),
    methods: {
      validate () {
        this.$refs.form.validate()
      }
    },
  }
</script>

<style scoped>
.button-register {
    position: relative;
    bottom: -90px;
    left: 60px;
}
.button-login {
    position: relative;
    top: 10px;
    left: 120px;
}
</style>