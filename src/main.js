import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import * as VueGoogleMaps from "vue2-google-maps";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.config.productionTip = false;
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyDoi0kDoetjxsvsctCrRb99I5lu1GJMj_8",
    libraries: "places,drawing,geometry",
    installComponents: true,
  },
});
Vue.use(VueAxios, axios);

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
