<template>
  <nav id="navbar"><!-- temporary znaci da navigation drawer ide preko, bez toga inace gurne stranicu -->
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
      style="height: 100%"
      class="v-navigation-drawer"
    >
    <v-row column style="height:150px; background: url('https://cdn.vuetifyjs.com/images/parallax/material2.jpg')">
      <v-col class="pa-0 pl-3 pt-4">
        <v-avatar class="ml-5 mt-3" size="60" style="border: 2px solid white">
          <v-img src="https://cdn.vuetifyjs.com/images/john.jpg"></v-img>
        </v-avatar>
        <p class="row-paragraph mt-1 font-weight-medium">Ante Antonini</p>
        <div class="row-paragraph" style="font-size: 12px">name@gmail.com
          <span class="pl-5"> <v-icon class="pl-15" color="white">mdi-chevron-down</v-icon>
          </span>
          </div>
      </v-col>
    </v-row>
      <v-list>   <!-- v-list can be lowered with dense property. -->
        <!--  nav styling that reduces the width v-list-item takes up as well as adding a border radius. -->
        <v-list-item
          v-for="([icon, text, route], i) in items"
          :key="i"
          router
          :to="route"
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
        style="width: 180px; height: 64px; color: #f5f5f5;" class="image-button pl-8">

        <!-- za centriranje title u sredinu toolbar-a !!-->
        <v-img src="@/assets/Pokemon-Logo.png"
        style="height: 55px; width: 155px"
        class="image-navbar mr-10"
        ></v-img>
        </v-btn>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn class="login-btn" to="/login">Login</v-btn>
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
.row-paragraph {
  color: white;
  margin: 0 0 0 20px !important;
}
.v-input .v-label {
  line-height: 15px !important;
  font-size: 12px;
  font-weight: bold;
}
.v-messages__message {
  font-size: 10px;
}
.v-list-item--active {
  color: blue !important;
}

@media all and (max-width: 600px) {
  .v-navigation-drawer {
    width: 70% !important;
  }
  .image-navbar {
    height: 45px !important;
    width: 110px !important;
    margin-left: 15px;
  }
  .login-btn {
    height: 30px !important;
    font-size: 10px !important;
    padding: 0 !important;
  }
}
</style>