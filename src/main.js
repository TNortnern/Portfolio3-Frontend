import Vue from "vue";
import router from "./router";
import App from "./App.vue";
import store from "./store";
import "./registerServiceWorker";
import vuetify from "./plugins/vuetify";
import VueParticles from "vue-particles";
import VueScrollTo from "vue-scrollto";
import VueScrollactive from "vue-scrollactive";
Vue.use(VueParticles);
Vue.use(VueScrollTo);
Vue.use(VueScrollactive);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
