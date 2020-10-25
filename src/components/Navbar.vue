<template>
    <v-app-bar
      app
      dense 
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-switch
        v-model="$vuetify.theme.dark"
        hint="This toggles the global state of the Vuetify theme"
        inset
        label="Vuetify Theme Dark"
        persistent-hint
      ></v-switch>
      
      <v-spacer></v-spacer>

      <v-toolbar-title  class="text-center" align-center text-center justify-center>Application</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
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
