<template>
  <v-app>
    <!-- v-container, onda nece ic preko footer-a  za parallax-->
    <v-main>
      <v-container>
        <v-row >
          <v-col
            cols="6"
            sm="4"
            md="3"
            lg="2"
            v-for="(pokemon, index) in pokemonDetails"
            :key="pokemon.id"
            align="center" 
          >
          <v-hover v-slot="{ hover }">
            <v-card height="300" class="text-center" :elevation="hover ? 16 : 2" :class="{ 'on-hover': hover }" router :to="'/' + index++">    <!-- kad hover onda je elevation 16, inace je 2 -->
              <div style="height:70%; background: #CFD8DC">

              
              <v-avatar size="140" color="grey lighten-2">
                <v-img class="pokemon-image" :src="pokemon.sprites.front_default"></v-img>
              </v-avatar>
              <div class="number my-3 white blue-grey lighten-2">#{{ index + 1 }}</div>
              <v-card-title
                class="py-0 px-0 mb-0 mt-6 justify-center"
                style="font-size: 25px; text-transform: capitalize;font-family: sans-serif;"
              >
                <!-- JUSTIFY CENTER ZA V-CARD-TITLE I V-CARD-ACTIONS -->
                <h5>{{ pokemon.name }}</h5>
              </v-card-title>
              <v-card-text class="pa-0" style="font-size: 12px">
                <span
                 :class="`type ${types.type.name} mt-1 mx-2 `" v-for="types in pokemon.types" :key="types.id"
                style="color: white; border-radius: 5px; display:inline-block; width: 70px">
                 {{ types.type.name }}
                </span>
              </v-card-text>
              </div>
            </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      pokemonDetails: [],

    };
  },
  async created() {
    const id = 10;
    for (let i = 1; i <= id; i++) {                                     /* uradio sam async zato sto redoslijed nije bio dobar,zato sam koristio await (odredeni stavri se prije ucitaju pa poremete redoslijed) */
      const res = await this.axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`)
      const data = await res.data;
      this.pokemonDetails.push(data);
    }
  }
};
</script>

<style scoped>
.full-width-section.parallax_section .row-bg,
.full-width-content.parallax_section .row-bg {
  margin-top: -150px !important;
}

.v-card.on-hover {    /* kad hoveramo card ce se pomaknuti za 5px gore */
  position: relative; 
  top: -7px;
}

.number {
  width: 45px;
  margin: 0 auto;
  border-radius: 5px;
}

.v-card {
  width: 200px !important;
}

.v-avatar {
  margin-top: 10px;
  border-radius: 50% !important;
}

.type.normal {
  background: #a4acaf;;
}
.type.grass{
  background: #9bcc50;
}
.type.fire{
  background: #fd7d24;;
}
.type.bug{
  background: #729f3f;
}
.type.water{
  background: lightblue;
}
.type.poison {
  background: #b97fc9;
}
.type.electric {
  background: #eed535;
}
.type.ground {
  background: linear-gradient(180deg, #f7de3f 50%, #ab9842 50%);;
}
.type.fairy {
  background: #fdb9e9;
}
.type.fighting {
  background: #ae561f;
}
.type.psychic {
  background: #f366b9;
}
.type.rock {
  background: #a38c21;
}
.type.ghost {
  background: #7b62a3;
}
.type.ice {
  background: #51c4e7;
}
.type.dragon {
  background: linear-gradient(180deg, #53a4cf 50%, #f16e57 50%);
}
.type.dark {
  background: #707070;
}
.type.steel {
  background: #9eb7b8;
}
.type.flying {
  background: linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%);
}
</style>

