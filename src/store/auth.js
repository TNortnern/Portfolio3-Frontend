const state = () => ({
  user: {},
  errors: [],
});

const actions = {
  login({ commit }, user) {
    commit("setUser", { user });
  },
  logout({ commit }, token) {
    if (token) console.log(token);
    commit("setUser", null);
  },
};

const mutations = {
  setUser(state, user) {
    state.user = user;
  },
};

export default {
  state,
  actions,
  mutations,
};
