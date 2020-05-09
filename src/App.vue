<template>
  <v-app id="app">
    <router-view></router-view>
  </v-app>
</template>

<script>
import ProjectsQuery from '@/graphql/ProjectsQuery'
import TechnologiesQuery from '@/graphql/TechnologiesQuery'
import GetUserQuery from '@/graphql/GetUserQuery'
export default {
  data () {
    return {
      error: null
    }
  },
  apollo: {
    projects: ProjectsQuery,
    technologies: TechnologiesQuery,
    getUser: { 
      query: GetUserQuery,
      variables () {
        return {
          token: localStorage.getItem('token')
        }
      },
      error (error) {
         this.error = error.message
         localStorage.removeItem('token')
      }
    }
  },
  name: 'App',
  watch: {
    projects (newval) {
      if (this.$store.state.projects.all && this.$store.state.projects.all.length) return
      if (newval) this.$store.dispatch('getAllProjects', newval)
    },
    technologies (newval) {
      if (this.$store.state.projects.technologies && this.$store.state.technologies.all.length) return
      if (newval) this.$store.commit('setItems', newval)
    },
    getUser (newval) {
      if (this.$store.state.auth.user) return
      if (newval) this.$store.commit('setUser', newval)
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