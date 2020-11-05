<template>
  <nav id="navbar"><!-- temporary znaci da navigation drawer ide preko, bez toga inace gurne stranicu -->
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
      src="https://cdn.bulbagarden.net/upload/a/a7/PSMD_poster.png"
      style="height: 100%"
      class="v-navigation-drawer"
    >
      <v-list shaped>   <!-- v-list can be lowered with dense property. -->
        <!--  nav styling that reduces the width v-list-item takes up as well as adding a border radius. -->
        <v-list-item
          v-for="([icon, text, route], i) in items"
          :key="i"
          router
          :to="route"
          style="background: #039BE5; opacity: 0.9"
        >
          <v-list-item-action>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>{{ text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    

    <v-app-bar app >

      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-spacer></v-spacer>
  
      <v-toolbar-title>
        <v-btn to="/"  text 
        style="width: 180px; height: 64px; color: #f5f5f5;" class="pl-8 mr-10">

        <!-- za centriranje title u sredinu toolbar-a !!-->
        <v-img src="https://assets.webiconspng.com/uploads/2017/09/Pokemon-Logo-PNG-Image-20961-300x169.png"
         
        style="height: 55px; width: 155px"
        class="mr-10"
        ></v-img>
        </v-btn>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- <v-switch                          //switch dark theme
        v-model="$vuetify.theme.dark"
        hint="Toggles theme mode"
        label="Dark Mode"
        persistent-hint
        dense
      ></v-switch> -->
      <!-- inset = Enlarge the v-switch track to encompass the thumb -->

      <!-- <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn> -->
    </v-app-bar>
  </nav>
</template>

<script>
export default {
  name: "Navbar",

  data: () => ({
    drawer: false,
    items: [
      ["mdi-home-import-outline", "Home", "/"],
      ["mdi-pokeball", "Pokedex", "/pokedex"],
      ["mdi-information-outline", "About", "/about"]
    ]
  })
};
</script>

<style>
.v-input .v-label {
  line-height: 15px !important;
  font-size: 12px;
  font-weight: bold;
}
.v-messages__message {
  font-size: 10px;
}
.v-list-item--active {
  background: #0277BD !important;
}

@media all and (max-width: 600px) {
  .v-navigation-drawer {
    width: 70% !important;
  }
}
</style>