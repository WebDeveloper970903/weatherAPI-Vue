<template>
  <v-card class="mx-auto custom-background" max-width="600">
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title class="headline mt-5 mb-4">
          {{ city_name }}
        </v-list-item-title>
        <v-list-item-subtitle>
          {{ time }} <br />
          <h2 class="mt-3">{{ weather_desc }}</h2>
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-text>
      <v-row align="center">
        <v-col class="display-3" cols="6">
          {{ temp.toFixed(1) * 1 }}&deg;C
        </v-col>
        <v-col cols="6">
          <v-img
            :src="`http://openweathermap.org/img/wn/${weather_icon}@4x.png`"
            alt="image"
            width="92"
          ></v-img>
        </v-col>
      </v-row>
    </v-card-text>

    <v-list-item>
      <v-list-item-icon>
        <v-icon>mdi-send</v-icon>
      </v-list-item-icon>
      <v-list-item-subtitle>{{ wind }} km/h</v-list-item-subtitle>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  name: "WeatherResult",

  props: [
    "temp",
    "wind",
    "temp_max",
    "temp_min",
    "weather",
    "weather_desc",
    "weather_icon",
    "city_name",
  ],

  data: () => {
    return {
      time: new Date(),
    };
  },
};
</script>

<style>
.custom-background {
  background-image: linear-gradient(#ffffff, #fffcf9, #ffefde);
}
</style>
