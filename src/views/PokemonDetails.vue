<template>
  <v-app>
    <v-main class="pa-0 ">
      <v-container
        style="margin: 0 150px 20px 150px;  height: 100%"
      >
        <v-card
          v-for="pokemon in singlePokemon"
          :key="pokemon.id"
          style="width: 90%; height: 1000px"
          class="mx-auto mt-10"
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
              <v-col align="left" style="width: 400px; height:250px; background: grey" >
                Stats
              </v-col>
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
              <v-col>
                <div>Type</div>
                <span class="mr-2" v-for="type in pokemonType" :key="type.id" style="display: inline-block">
                  {{type.type.name}}
                </span>
              </v-col>
              <v-col>
                <div>Weaknesses</div>
                <span class="mr-2" v-for="weakness in pokemonWeakness" :key="weakness.id" style="display: inline-block">
                  {{weakness.name}}
                </span>
              </v-col>
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
      pokemonCategory: '',
      pokemonType: [],
      pokemonStats: [],
      pokemonWeakness: []
    };
  },
  async created() {
    const res = await this.axios.get(
      `https://pokeapi.co/api/v2/pokemon/${this.pokemonName}`
    );
    const description = await this.axios.get(
      `https://pokeapi.co/api/v2/pokemon-species/${this.pokemonName}`
    );
    const weak = await this.axios.get(`https://pokeapi.co/api/v2/type/${this.pokemonName}`);
    const data = await res.data;

    this.pokemonWeakness = weak.data.damage_relations.double_damage_from;
    this.pokemonType = res.data.types;
    this.pokemonStats = res.data.stats;
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
.container {
  background-image: url('https://image.freepik.com/free-vector/subtle-white-background-with-diagonal-lines_1017-14763.jpg');
  background-size: cover;
}
.v-main {
  background-image: url('https://images2.alphacoders.com/474/thumb-350-474391.jpg');
  background-size: cover;
}

.attribute-title {
    color: white;
}
.text-black {
    color: black;
}
</style>