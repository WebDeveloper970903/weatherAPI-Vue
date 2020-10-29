<template>
  <v-app>
    <v-app-bar app color="#717171" dark>
      <div class="d-flex align-center">
        <h1 class="logo">Weather</h1>
      </div>

      <v-spacer></v-spacer>
      <gmap-autocomplete
        @place_changed="setFromtownPlace"
        placeholder="Please insert city name."
        class="city-name_input"
      ></gmap-autocomplete>
      <v-spacer></v-spacer>

      <v-btn href="https://openweathermap.org/" target="_blank" text>
        <span class="mr-2">SignUp</span>
        <v-icon>mdi-account-multiple-plus-outline </v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <weather-result
          v-if="loading"
          :city_name="city_name"
          :temp="temp"
          :wind="wind"
          :temp_max="temp_max"
          :temp_min="temp_min"
          :weather="weather"
          :weather_desc="weather_desc"
          :weather_icon="weather_icon"
        />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import WeatherResult from "../components/WeatherResult";

export default {
  name: "LandingPage",

  components: {
    WeatherResult,
  },

  data: () => ({
    loading: false,
    city_name: "",
    temp: null,
    temp_max: null,
    temp_min: null,
    wind: null,
    weather: "",
    weather_desc: "",
    weather_icon: "",
  }),

  methods: {
    setFromtownPlace(e) {
      this.axios
        .get(
          `http://api.openweathermap.org/data/2.5/weather?lat=${e.geometry.location.lat()}&lon=${e.geometry.location.lng()}&appid=7e97f03d10dba67178cf923318e447f7`
        )
        .then((response) => {
          this.city_name = e.formatted_address;
          this.temp = response.data.main.temp - 273.15;
          this.temp_max = response.data.main.temp_max - 273.15;
          this.temp_min = response.data.main.temp_min - 273.15;
          this.wind = response.data.wind.deg;
          this.weather = response.data.weather[0].main;
          this.weather_desc = response.data.weather[0].description;
          this.weather_icon = response.data.weather[0].icon;
          this.loading = true;
        });
    },
  },
};
</script>

<style scopped>
.city-name_input {
  width: 300px;
  height: 40px;
  outline: solid #d2d2d2 2px;
  padding: 10px 20px;
  color: white;
}
</style>
