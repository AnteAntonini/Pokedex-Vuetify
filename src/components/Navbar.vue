<template>
  <nav id="navbar">
    <v-app-bar app>     <!-- v-list can be lowered with dense property. -->
      
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-spacer></v-spacer>

      <v-toolbar-title>    <!-- za centriranje title u sredinu toolbar-a !!-->
        <span>Application</span>
        </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-switch
        v-model="$vuetify.theme.dark"
        hint="Toggles theme mode"
        label="Dark Mode"
        persistent-hint
        dense
      ></v-switch>      <!-- inset = Enlarge the v-switch track to encompass the thumb -->
    </v-app-bar>

    


    <v-navigation-drawer v-model="drawer" app temporary dark src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"> 
      <v-list shaped>            <!--  nav styling that reduces the width v-list-item takes up as well as adding a border radius. -->
        <v-list-item v-for="([icon,text,route], i) in items" :key="i" router :to="route">
          
          <v-list-item-action>
            <v-icon>{{icon}}</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>{{text}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>  
    </v-navigation-drawer>   <!-- temporary znaci da navigation drawer ide preko, bez toga inace gurne stranicu -->
  </nav>
</template>

<script>
export default {
  name: "Navbar",

  data: () => ({
    drawer: false,
    items: [
        ['mdi-email', 'Inbox', '/'],
        ['mdi-account-supervisor-circle', 'Supervisors', '#'],
        ['mdi-clock-start', 'About', '/about'],
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
</style>