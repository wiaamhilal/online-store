import Vue, { computed } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// import "../dist/css/all.min.css";
// import "../dist/js/all.min.js";

import "./scss/main.scss";
import "normalize.css";

import "./filters"; //global filters

import "./directives"; //glabal directives

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
