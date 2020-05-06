const state = () => ({
  all: [],
  single: null,
  modal: false,
  tab: { name: 0 },
  items: [
    { name: "All" },
  ],
});

const actions = {
  getAllProjects({ commit }, projects) {
    // api call
    commit("setProjects", projects);
  },
  addProject ({commit, state}, project) {
    const temp = [...state.all, project]
    commit("setProjects", temp)
  }
};

const mutations = {
  setProjects(state, projects) {
    state.all = projects;
  },
  setTab(state, tab) {
    state.tab.name = tab;
  },
  setItems(state, items) {
   
    state.items = [...state.items, ...items]
  }
};

export default {
  state,
  actions,
  mutations,
};
