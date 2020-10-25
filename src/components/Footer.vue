<template>
  <v-card>
    <v-footer
      absolute
      class="font-weight-medium mt-0 "
      padless
      app
    >
      <v-col
        class="text-center"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-col>
    </v-footer>
  </v-card>
</template>

<script>
  export default {
    //
  }
</script>

<script>
export default {
  name: "Navbar",

  data: () => ({
    
  })
};
</script>