<template>
  <v-app id="app">
    <router-view></router-view>
  </v-app>
</template>

<script>
// import projects from '@/dummy/projects'
import ProjectsQuery from '@/graphql/ProjectsQuery'
import TechnologiesQuery from '@/graphql/TechnologiesQuery'
export default {
  apollo: {
    projects: ProjectsQuery,
    technologies: TechnologiesQuery
  },
  name: 'App',
  watch: {
    projects (newval) {
      if (this.$store.state.projects.all && this.$store.state.projects.all.length) return
      if (newval) this.$store.dispatch('getAllProjects', newval)
    },
    technologies (newval) {
      if (this.$store.state.projects.technologies && this.$store.state.technologies.all.legnth) return
      if (newval) this.$store.commit('setItems', newval)
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/styles";
body {
  font-family: "Raleway", sans-serif !important;
}
</style>