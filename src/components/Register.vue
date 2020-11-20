<template>
  <v-form v-model="valid">
    <v-container>
      <v-row style="width: 80%" class="ma-auto mt-10">
        <v-col cols="12">
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="10"
            label="First name"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12">
          <v-text-field
            v-model="lastname"
            :rules="nameRules"
            :counter="15"
            label="Last name"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12">
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
          <p class="red--text text-left">{{ error }}</p>
        </v-col>

        <v-col cols="12">
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
          <v-btn class="button-register" @click="signup">Register</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
  export default {
    name: 'Register',
    data: () => ({
      valid: false,
      firstname: '',
      lastname: '',
      error: '',
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
      signup() {
        let newUser = {
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          password: this.password
        }
        this.axios.post('http://localhost:5000/signup', newUser).then(res => {
          this.error = '';
          this.$router.push('/login');
        },err => {
          console.log(err.response);
          this.error = err.response.data.error;
        })
      }
    }
  }
</script>

<style scoped>
.button-register {
  text-transform: capitalize;
  color: white !important;
  background-color: #30a7d7 !important;
  width: 200px !important;
  height: 45px !important;
  margin-top: 40px;
  font-size: 18px;
  font-weight: 400;
}
</style>>

