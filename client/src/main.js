import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store";

// vue templates
import BaseDashboard from "./components/BaseDashboard.vue";
import BaseIndex from "./components/BaseIndex.vue";

Vue.config.productionTip = false;
// Global Components
Vue.component("dashboard", BaseDashboard);
Vue.component("home", BaseIndex);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
