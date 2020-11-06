  <template>
  <v-app>
    <v-main class="pa-0 ">
      <v-container style="mb-15 height: 100%" class="px-0">
        <v-card
          v-for="pokemon in singlePokemon"
          :key="pokemon.id"
          style="width: 90%; height: 100%px"
          class="v-card-container mx-auto mt-10"
        >
          <v-row>
            <v-col cols="12" class="pt-0">
              <div class="d-flex flex-row">
                <v-btn
                  class="previous grey"
                  @click="reloadPage"
                  :to="'/pokedex/' + paginationLeft"
                >
                  <div
                    class="pokedex-pokemon-pagination-wrapper d-flex justify-space-around"
                    style="width: 100%; height: 100%"
                  >
                    <span class="arrow-icon arrow-left"
                      ><v-icon>mdi-arrow-left</v-icon></span
                    >
                    <span class="pagination-number left align-self-center "
                      >#{{ paginationLeft }}</span
                    >
                    <span
                      class="pagination-pokemon left align-self-center mr-15"
                    >
                      {{
                        pokemonNamesPagination[paginationLeft - 1].name
                      }}</span
                    >
                  </div>
                </v-btn>
                <v-btn
                  class="next grey"
                  @click="reloadPage"
                  :to="'/pokedex/' + paginationRight"
                >
                  <div
                    class="pokedex-pokemon-pagination-wrapper d-flex justify-space-around"
                    style="width: 100%; height: 100%"
                  >
                    <span
                      class="pagination-pokemon right align-self-center ml-15"
                      >{{
                        pokemonNamesPagination[paginationRight - 1].name
                      }}</span
                    >
                    <span class="pagination-number right align-self-center"
                      >#{{ paginationRight }}</span
                    >
                    <span class="arrow-icon arrow-right"
                      ><v-icon>mdi-arrow-right</v-icon></span
                    >
                  </div>
                </v-btn>
              </div>
              <v-card-title
                class="justify-center mt-4 pt-0"
                style="font-size: 35px; text-transform: capitalize;font-family: sans-serif"
              >
                {{ pokemon.name }}
                <span class="pokemon-number pl-5" style="color: #616161"
                  >#{{ pokemon.id }}</span
                >
              </v-card-title>
            </v-col>
          </v-row>
          <v-row class="row-container px-4">
            <v-col cols="12" sm="6">
              <v-img
                class="pokemon-image"
                :src="
                  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
                "
                style="height: 400px; width:450px; background: #f2f2f2"
              ></v-img>
              <div class="pokemon-stats-info ">
                <v-col
                  align="left"
                  class="mt-2 pa-0"
                  style="width: 450px; height:280px; background: grey; border-radius: 10px"
                >
                  <div class="pt-3 pa-6">Stats</div>

                  <v-row class="text-center mx-2" style="font-size: 8px">
                    <v-col
                      v-for="n in pokemonStatsInfo"
                      :key="n"
                      class="stats-col pa-0"
                    >
                      <li v-for="n in 15" :key="n" class="mx-1 mb-1 white"></li>
                      <span style="font-size: 10px; font-weight: bold">{{
                        n
                      }}</span>
                    </v-col>
                  </v-row>
                </v-col>
              </div>
            </v-col>

            <v-col cols="12" sm="6" class="text-left">
              <v-card-text>
                {{ pokemonDesc }}
              </v-card-text>
              <div class="pl-4">
                Versions:
                <span><v-icon>mdi-pokeball</v-icon></span>
              </div>
              <v-card
                class="mt-11 mx-4 pt-2 px-4 blue"
                style="text-transform: capitalize; border-radius: 10px"
              >
                <v-row>
                  <v-col class="attribute-title pl-4"
                    >Height
                    <div class="text-black">{{ pokemonHeight / 10 }}m</div>
                    <v-col class="pa-0 mt-3">
                      <div>Weight</div>
                      <div class="text-black">{{ pokemonWeight / 10 }}kg</div>
                    </v-col>
                    <v-col class="pa-0 my-3">
                      <div>Gender</div>
                      <div class="mt-2">
                        <span class="pr-2"
                          ><v-icon style="font-size: 28px"
                            >mdi-gender-male</v-icon
                          ></span
                        >
                        <span
                          ><v-icon style="font-size: 28px"
                            >mdi-gender-female</v-icon
                          ></span
                        >
                      </div>
                    </v-col>
                  </v-col>
                  <v-col class="attribute-title"
                    >Category
                    <div class="text-black">{{ pokemonCategory }}</div>
                    <v-col class="pa-0 mt-3">
                      <div>Abilities</div>
                      <div class="text-black">
                        {{ pokemonAbility }}

                        <v-dialog v-model="dialog" max-width="400px">
                          <template v-slot:activator="{ on, attrs }">
                            <span v-bind="attrs" v-on="on">
                              <v-icon>mdi-help-circle</v-icon></span
                            >
                          </template>
                          <v-card style="background: #313131; height: 180px">
                            <v-card-title
                              class="card-title pr-0 pt-0"
                              style="color: grey; font-size: 15px"
                            >
                              Ability Info
                              <v-spacer></v-spacer>
                              <v-card-actions class="pr-0 pt-0">
                                <v-btn
                                  class="black"
                                  color="white"
                                  text
                                  @click="dialog = false"
                                >
                                  <v-icon>mdi-close</v-icon>Close
                                </v-btn>
                              </v-card-actions>
                            </v-card-title>
                            <v-card-text
                              style="color: white; font-size: 25px; text-transform: capitalize"
                              >{{ pokemonAbility }}
                              <p v-if="pokemon.id > 3" class="mt-3" style="font-size: 12px">
                                {{PokemonAbilityDetailed}}
                              </p>
                              <p v-else class="mt-3" style="font-size: 12px">
                                {{PokemonAbilityDetailedOther}}
                              </p>
                            </v-card-text>
                          </v-card>
                        </v-dialog>
                      </div>
                    </v-col>
                  </v-col>
                </v-row>
              </v-card>
              <v-col>
                <div class="type-weakness mt-2">Type</div>
                <span
                  :class="
                    `type ${type.type.name} mr-2 mt-2 py-1 text-center type-style`
                  "
                  v-for="type in pokemonType"
                  :key="type.id"
                >
                  {{ type.type.name }}
                </span>
              </v-col>
              <!--  <v-col>
                <div class="type-weakness">Weaknesses</div>
                <span
                  :class="
                    `type ${weakness.name} mr-2 mb-2 py-1 text-center type-style`
                  "
                  v-for="weakness in pokemonWeakness"
                  :key="weakness.id"
                >
                  {{ weakness.name }}
                </span>
              </v-col> -->
            </v-col>
          </v-row>
        </v-card>
        <v-row>
          <v-col cols="12" sm="6">
            <v-container cols="6">
              <canvas
                id="planet-chart"
                style="width: 450px; height: 290px;"
              ></canvas>
            </v-container>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Chart from 'chart.js';


export default {
  name: "PokemonDetails",
  data() {
    return {
      pokemonName: this.$route.params.pokemonName,
      singlePokemon: [],
      id: "",
      pokemonDesc: "",
      pokemonAbility: "",
      pokemonWeight: "",
      pokemonHeight: "",
      pokemonCategory: "",
      pokemonType: [],
      pokemonStats: [],
      pokemonWeakness: [],
      pokemonStatsInfo: ['HP','Attack','Defense','Special Attack','Special Defense', 'Speed'],
      pokemonStatsData: [],
      chartBackgroundColor: [],
      paginationLeft: '',
      paginationRight: '',
      pokemonNamesPagination: [],
      dialog: false,
      PokemonAbilityDetailed: '',
      PokemonAbilityDetailedOther: ''
   }
  },
  methods: {
    async createChart(chartId) {
      const ctx = document.getElementById(chartId);
      const xlabels =  this.pokemonStatsInfo;
      const statBackground = this.chartBackgroundColor;
      const pokemonData =  this.pokemonStatsData;
      const myChart = await new Chart(ctx, {
          type: 'bar',
          data: {
            labels: xlabels,
            datasets: [
              { // one line graph
                data: pokemonData,
                backgroundColor: statBackground,
                borderWidth: 1
              },
            ]
          },
          options: {
            legend: {
              display: false
            },
            responsive: true,
            maintainAspectRatio: false,
            lineTension: 1,
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true,
                  padding: 25,
                }
              }]
           }
         }
       });
    },
    reloadPage(){
      window.location.reload()
    }
  },
  async created() {
    const res = await this.axios.get(
      `https://pokeapi.co/api/v2/pokemon/${this.pokemonName}`
    );
    const description = await this.axios.get(
      `https://pokeapi.co/api/v2/pokemon-species/${this.pokemonName}`
    );

    const ability = await this.axios.get(
      `https://pokeapi.co/api/v2/ability/${res.data.abilities[0].ability.name}`
      
    );
    
    this.PokemonAbilityDetailed = ability.data.effect_entries[1].short_effect;
    
    this.PokemonAbilityDetailedOther = ability.data.effect_entries[0].short_effect;
    

    for (let i = 1; i <= 50; i++) {         //zbog redoslijeda
      const resNames = await this.axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`)
      const namesArray = await resNames.data;
      this.pokemonNamesPagination.push(namesArray);
    }


    /* const weak = await this.axios.get(
      `https://pokeapi.co/api/v2/type/${this.pokemonName}`
    ); */

    const data = await res.data;
    
    /* this.pokemonWeakness = weak.data.damage_relations.double_damage_from; */
    this.pokemonType = res.data.types;
    this.pokemonStats = res.data.stats;

    res.data.stats.forEach(stat => {
      this.pokemonStatsData.push(stat.base_stat);
    });

    this.chartBackgroundColor = Array(6).fill(1).map(i => ('#4592c4'));

    this.pokemonAbility = res.data.abilities[0].ability.name;
    this.pokemonWeight = res.data.weight;
    this.pokemonHeight = res.data.height;
    this.pokemonCategory = description.data.egg_groups[0].name;
    this.singlePokemon.push(data);
    this.id = data.id;
    this.pokemonDesc = description.data.flavor_text_entries[0].flavor_text;

    this.paginationLeft = this.id - 1;
    if(this.paginationLeft <= 0) {
      this.paginationLeft = 50;
    }
    this.paginationRight = this.id + 1;
    if(this.paginationRight > 50) {
      this.paginationRight = 1;
    }
  },
  beforeUpdate() {
  this.createChart('planet-chart');
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/_typeBackgroundColor.scss";

.container {
  background-image: url("https://image.freepik.com/free-vector/subtle-white-background-with-diagonal-lines_1017-14763.jpg");
  background-size: cover;
}
.v-main {
  background-image: url("https://images2.alphacoders.com/474/thumb-350-474391.jpg");
  background-size: cover;
}

//BUTTONS
.previous {
  margin-right: 0.25%;
  width: 49.5%;
  height: 60px !important;
  &:hover {
    background: #2196f3 !important;
  }
}
.next {
  margin-left: 0.25%;
  width: 50%;
  height: 60px !important;
  &:hover {
    background: #2196f3 !important;
  }
}
.arrow-icon {
  border-radius: 50%;
  padding: 3px 4px 4px 4px;
  background: white;
}

.pagination {
  &-pokemon {
    font-size: 22px;
    text-transform: capitalize;
    color: rgb(70, 64, 64);
  }
  &-number {
    font-size: 20px;
    color: white;
  }
}

.type-weakness {
  margin-bottom: 16px;
  font-size: 20px;
}
.type-style {
  display: inline-block;
  color: white;
  border-radius: 5px;
  text-transform: capitalize;
  width: 137px;
}

.attribute-title {
  color: white;
}
.text-black {
  color: black;
  font-size: 20px;
}

li {
  height: 8px;
  list-style: none;
  border: 1px solid white;
}

@media all and (max-width: 960px) {
  .v-card-container {
    width: 100% !important;
  }
  .row-container {
    padding: 0;
  }
  .pokemon-image {
    height: 350px !important;
    width: 100% !important;
  }
  .pokedex-pokemon-pagination-wrapper {
    display: flex;
    justify-content: space-between !important;
  }
  .pagination-pokemon {
    display: none;
  }
}
</style>