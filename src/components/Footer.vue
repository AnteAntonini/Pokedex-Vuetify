<template>
    <v-footer
      absolute
      class="font-weight-medium mt-0"
      padless
      app
      style="width: 100vw; box-shadow: 0px -1px 2px rgba(50, 50, 50, 0.75);"
    >
      <v-col
        class="text-center"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-col>
    </v-footer>
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