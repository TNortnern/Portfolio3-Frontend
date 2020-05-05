import Vue from 'vue';
import VueRouter from "vue-router";
import Portfolio from "../pages/Portfolio.vue";
import NotFound from '../pages/NotFound.vue'
import Admin from "../pages/Admin.vue";
Vue.use(VueRouter);
const routes = [
  { path: "/", component: Portfolio, meta: { title: 'Portfolio'} },
  { path: "/admin", component: Admin, meta: { title: 'Admin'} },
  { path: "*", component: NotFound, meta: { title: 'Page Not Found' } },
];

const router = new VueRouter({
    mode: 'history',
    routes
});
const DEFAULT_TITLE = "Some Default Title";
router.afterEach((to) => {
  // Use next tick to handle router history correctly
  // see: https://github.com/vuejs/vue-router/issues/914#issuecomment-384477609
  Vue.nextTick(() => {
    document.title = to.meta.title || DEFAULT_TITLE;
  });
});


export default router