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
import AOS from "aos";
import "aos/dist/aos.css";
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
  created () {
    AOS.init({
      offset: 190, // offset (in px) from the original trigger point
      delay: 10, // values from 0 to 3000, with step 50ms
      duration: 500, // values from 0 to 3000, with step 50ms
      easing: "ease-in", // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
      disable: 'mobile'
    });
  },
  render: (h) => h(App),
}).$mount("#app");
