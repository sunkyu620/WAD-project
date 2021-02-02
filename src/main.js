import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import moment from "moment";
import VModal from "vue-js-modal";
import { Autocomplete, Button, Field, Navbar } from "buefy";
import "buefy/dist/buefy.css";

import VueEllipseProgress from "vue-ellipse-progress";
Vue.use(VueEllipseProgress);

import { BootstrapVue } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(VModal);

Vue.use(Autocomplete);
Vue.use(Button);
Vue.use(Field);
Vue.use(Navbar);

import VuePageTransition from "vue-page-transition";

Vue.use(VuePageTransition);

Vue.config.productionTip = false;

Vue.filter("formatDate", function(value) {
  if (!value) return "";
  return moment(value.toString()).format("MM/DD/YYYY hh:mm");
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
