import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/pokedex",
    name: "Pokedex",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Pokedex.vue")
  },
  {
    path: "/pokedex/:pokemonName",
    name: "PokemonDetails",
    component: () =>
      import(/* webpackChunkName: "PokemonDetails" */ "../views/PokemonDetails.vue")
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import("../components/Register.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import("../components/Login.vue")
  }
];

const router = new VueRouter({
  scrollBehavior: (to, from, savedPosition) => {
    return {x: 0, y:0}
  },
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
