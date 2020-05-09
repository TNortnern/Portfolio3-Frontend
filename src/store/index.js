import Vue from 'vue'
import Vuex from 'vuex'
import constants from './constants';
import projects from './projects'
import auth from './auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navItems: [
      {
        name: "About",
        to: "#about",
        icon: "fas fa-info-circle",
      },
      {
        name: "Projects",
        to: "#projects",
        icon: "fas fa-th"
      },
      {
        name: "Contact",
        to: "#contact",
        icon: 'fas fa-id-card-alt'
      },
    ],
    isAuthenticated: false
  },
  mutations: {
    isAuthenticated (state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated
    }
  },
  actions: {
    async getUser (_, runner) {
      const result = await runner()
      console.log(result)
    }
  },
  modules: {
    constants,
    projects,
    auth
  },
});
