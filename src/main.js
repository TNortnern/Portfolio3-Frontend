import Vue from "vue";
import router from "./router";
import App from "./App.vue";
import store from "./store";
import "./registerServiceWorker";
import vuetify from "./plugins/vuetify";
import apolloProvider from './plugins/apolloProvider'
import VueParticles from "vue-particles";
import VueScrollTo from "vue-scrollto";
import VueScrollactive from "vue-scrollactive";
import Underline from '@/components/portfolio/misc/Underline'
Vue.use(VueParticles);
Vue.use(VueScrollTo);
Vue.use(VueScrollactive);
Vue.component('Underline', Underline)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  apolloProvider,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
