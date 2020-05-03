const state = () => ({
  all: [],
  single: null,
  modal: false,
  tab: { name: 0 },
  items: [
    { tab: "All" },
    { tab: "Vue" },
    { tab: "React" },
    { tab: "Laravel" },
    { tab: "PHP" },
    { tab: "Nuxt" },
    { tab: "ReactNative" },
    { tab: "GraphQL/Apollo" },
    { tab: "SCSS" },
    { tab: "Redux" },
  ],
});

const actions = {
  getAllProjects({ commit }, projects) {
    // api call
    commit("setProjects", projects);
  },
};

const mutations = {
  setProjects(state, projects) {
    state.all = projects;
  },
  setTab(state, tab) {
    state.tab.name = tab;
  },
};

export default {
  state,
  actions,
  mutations,
};
