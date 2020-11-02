  <template>
  <v-app>
    <v-main class="pa-0 ">
      <v-container style="margin: 0 150px 20px 150px;  height: 100%">
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
            <v-col  cols="12" sm="6">
              <v-img
                :src="
                  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
                "
                style="height: 400px; width:450px; background: #f2f2f2"
              ></v-img>
              <div class="pokemon-stats-info">
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
                        <span><v-icon>mdi-help-circle</v-icon></span>
                      </div>
                    </v-col>
                  </v-col>
                </v-row>
              </v-card>
              <v-col>
                <div class="type-weakness mt-2">Type</div>
                <span
                  :class="
                    `type ${type.type.name} mr-2 py-1 text-center type-style`
                  "
                  v-for="type in pokemonType"
                  :key="type.id"
                >
                  {{ type.type.name }}
                </span>
              </v-col>
              <v-col>
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
              </v-col>
            </v-col>
          </v-row>
        </v-card>
        <v-row>
          <v-col cols="8" sm="6">
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
      chartBackgroundColor: []
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
    }
  },
  async created() {
    const res = await this.axios.get(
      `https://pokeapi.co/api/v2/pokemon/${this.pokemonName}`
    );
    const description = await this.axios.get(
      `https://pokeapi.co/api/v2/pokemon-species/${this.pokemonName}`
    );
    const weak = await this.axios.get(
      `https://pokeapi.co/api/v2/type/${this.pokemonName}`
    );
    const data = await res.data;

    this.pokemonWeakness = weak.data.damage_relations.double_damage_from;
    this.pokemonType = res.data.types;
    this.pokemonStats = res.data.stats;

    res.data.stats.forEach(stat => {
      this.pokemonStatsData.push(stat.base_stat);
    });

    this.chartBackgroundColor = Array(6).fill(1).map(i => ('#4592c4'));

    console.log(this.chartBackgroundColor)

    this.pokemonAbility = res.data.abilities[0].ability.name;
    this.pokemonWeight = res.data.weight;
    this.pokemonHeight = res.data.height;
    this.pokemonCategory = description.data.egg_groups[0].name;
    this.singlePokemon.push(data);
    this.id = data.id;
    this.pokemonDesc = description.data.flavor_text_entries[0].flavor_text;
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
</style>