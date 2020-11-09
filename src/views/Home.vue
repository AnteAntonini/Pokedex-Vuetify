<template>
  <v-app>
    <v-main class="pa-0" app>
      <v-parallax
        dark
        src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
        style="transform: none; height: 100%;"
        class="parallax-background"
      >
        <v-row align="center" justify="center">
          <v-col class="text-center" cols="12">
            <h1 class="heading font-weight-thin  mb-5" style="position: relative; top: -100px;" >
              Pokedex
            </h1>
            <h4 class="subheading" style="position: relative; top: -100px;">
              Explore all pokemons
            </h4>
            <v-btn class="pulse-button mt-10" to="/pokedex" >Explore</v-btn>
          </v-col>
        </v-row>
      </v-parallax>
    </v-main>
  </v-app>
</template>

<script>
export default {
    
}
</script>

<style scoped>    /* >>> deep selector (ako ne radi bez toga) */
  
* >>>.v-parallax__image { 
    transform: translate(-50%, 200px) !important;
}

.heading {
  opacity: 0.0;
  animation: fadeIn ease 5s;
  animation-fill-mode: forwards;   
  font-size: 6rem;   
}                                                 /* Setting forwards value «the target will retain the computed values set by the last keyframe encountered during execution» */
.subheading {
  opacity: 0.0;
  animation: fadeIn ease 5s;
  animation-fill-mode: forwards;
}

.pulse-button {
  width: 150px;
  height: 50px !important;
  color: #313133;
  background: #4FD1C5;
  background: linear-gradient(90deg, rgba(129,230,217,1) 0%, rgba(79,209,197,1) 100%);
  border: none;
  border-radius: 100px;
  box-shadow: 12px 12px 24px rgba(79,209,197,.64);
  transition: all 0.3s ease-in-out 0s;
  outline: none;
  }

.pulse-button::before {
  content: '';
  border-radius: 100px;
  min-width: 220px;
  min-height: 80px;
  border: 6px solid #00FFCB;
  box-shadow: 0 0 60px rgba(0,255,203,.64);
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: all .3s ease-in-out 0s;
  margin-left: 75px;
  margin-top: 25px;
}

.pulse-button:hover, .button:focus {
  color: #313133;
  transform: translateY(-6px);
}

.pulse-button:hover::before, button:focus::before {
  opacity: 1;
}

.pulse-button::after {
  content: '';
  width: 30px; height: 30px;
  border-radius: 100%;
  border: 6px solid #00FFCB;
  position: absolute;
  z-index: -1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ring 1.5s infinite;
}

.pulse-button:hover::after, button:focus::after {
  animation: none;
  display: none;
}



@keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@keyframes ring {
  0% {
    width: 30px;
    height: 30px;
    opacity: 1;
  }
  100% {
    width: 200px;
    height: 200px;
    opacity: 0;
  }
}

@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) { 
  
  .parallax-background {
    background-attachment:scroll !important;
    background-size: cover !important;
    transform: none;
    height: 80% !important;
  }
}
@media only screen and (max-width: 768px) {
  .heading {
    font-size: 3.75rem !important;
  }
}


</style>
