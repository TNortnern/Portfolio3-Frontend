import Vue from 'vue';
import VueRouter from "vue-router";
import Portfolio from "../pages/Portfolio.vue";
import NotFound from '../pages/NotFound.vue'
import Admin from "../pages/Admin.vue";
Vue.use(VueRouter);
const routes = [
  { path: "/", component: Portfolio },
  { path: "/admin", component: Admin },
  { path: "*", component: NotFound },
];

const router = new VueRouter({
    mode: 'history',
    routes
});


export default router