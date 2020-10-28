<template>
  <v-container class="ma-0 pa-0">     <!-- v-conatiner, onda nece ic preko footer-a -->
    <v-parallax :src=n.src v-for="(n,i) in parall" :key="i"
     style="height: 700px; width: 100vw" class="pa-0 ma-0"
     >
      <v-row
      align="center"
      justify="center"
      >
      <v-col
        class="text-center"
        cols="12"
      >
        <h1 class="display-1 font-weight-thin mb-4">
          Vuetify
        </h1>
        <h4 class="subheading">
          Build your application today!
        </h4>
      </v-col>
    </v-row>
    </v-parallax>
  </v-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
      parall: [
        {src: "https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"},
        {src: "https://cdn.vuetifyjs.com/images/parallax/material.jpg"},
      ],
      master: []
    }
  },
  created() {
    this.axios.get('https://europe.api.riotgames.com/lor/ranked/v1/leaderboards?api_key=RGAPI-42e6d0f0-7380-47cc-98c5-c92bd21b93aa').then(response => {
      console.log(response);
    })
  }

};
</script>

<style scoped>
.full-width-section.parallax_section .row-bg, .full-width-content.parallax_section .row-bg {
    margin-top: -150px !important;
}

</style>

