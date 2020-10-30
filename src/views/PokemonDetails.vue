<template>
  <v-app>
    <v-main>
      <v-container
        style="margin: 0 150px 0 150px; background: red; height: 100%"
      >
        <v-card
          v-for="pokemon in singlePokemon"
          :key="pokemon.id"
          style="width: 90%"
          class="mx-auto"
        >
          <v-row>
            <v-col cols="12">
              <v-card-title
                class="justify-center"
                style="font-size: 35px; text-transform: capitalize;font-family: sans-serif"
              >
                {{ pokemon.name }}
                <span class="pokemon-number pl-5" style="color: #616161"
                  >#{{ pokemon.id }}</span
                >
              </v-card-title>
            </v-col>
          </v-row>
          <v-row class="px-4">
            <v-col cols="6">
              <v-img
                :src="
                  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
                "
                style="height: 400px; width:400px; background: #f2f2f2"
              ></v-img>
            </v-col>

            <v-col cols="6" class="text-left">
              <v-card-text>
                {{ pokemonDesc }}
              </v-card-text>
              <div class="pl-4">Versions:
                  <span><v-icon>mdi-pokeball</v-icon></span>
              </div>
              <v-card class="mt-11 mx-4 px-4 blue" style="text-transform: capitalize">
                  <v-row>
                  <v-col class="attribute-title pl-4" >Height
                      <div class="text-black">{{pokemonHeight/10}}m</div>
                      <v-col class="pa-0 mt-3">
                        <div>Weight</div>
                        <div class="text-black">{{pokemonWeight/10}}kg</div>
                      </v-col> 
                      <v-col class="pa-0 my-3">
                        <div>Gender</div>
                        <div>
                            <span class="pr-2"><v-icon>mdi-gender-male</v-icon></span>
                            <span><v-icon>mdi-gender-female</v-icon></span>
                        </div>
                      </v-col>
                      
                  </v-col>
                  <v-col class="attribute-title">Category
                      <div class="text-black">{{pokemonCategory}}</div>
                      <v-col class="pa-0 mt-3">
                        <div>Abilities</div>
                        <div class="text-black">
                            {{pokemonAbility}}
                            <span><v-icon>mdi-help-circle</v-icon></span>
                            </div>
                      </v-col>
                      
                  </v-col>
                  </v-row>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "PokemonDetails",
  data() {
    return {
      pokemonName: this.$route.params.pokemonName,
      singlePokemon: [],
      id: "",
      pokemonDesc: "",
      pokemonAbility: '',
      pokemonWeight: '',
      pokemonHeight: '',
      pokemonCategory: ''
    };
  },
  async created() {
    const res = await this.axios.get(
      `https://pokeapi.co/api/v2/pokemon/${this.pokemonName}`
    );
    const description = await this.axios.get(
      `https://pokeapi.co/api/v2/pokemon-species/${this.pokemonName}`
    );
    const data = await res.data;
    this.pokemonAbility = res.data.abilities[0].ability.name;
    this.pokemonWeight = res.data.weight;
    this.pokemonHeight = res.data.height;
    this.pokemonCategory = description.data.egg_groups[0  ].name;
    this.singlePokemon.push(data);
    this.id = data.id;
    this.pokemonDesc = description.data.flavor_text_entries[0].flavor_text; 
  }
};
</script>

<style scoped>
.attribute-title {
    color: white;
}
.text-black {
    color: black;
}
</style>