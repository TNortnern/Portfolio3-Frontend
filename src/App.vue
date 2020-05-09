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
  async created () {
    await this.$apollo.query({
      query: GetUserQuery,
      variables: {
        token: localStorage.getItem('token')
      }
    })
      .then(({ data }) => {
        // console.log(data)
        this.$store.commit('isAuthenticated', true)
        this.$store.commit('setUser', data.getUser)
      })
      .catch(err => {
         localStorage.removeItem('token')
        console.log(err)
      })
  },
  apollo: {
    projects: ProjectsQuery,
    technologies: TechnologiesQuery,
  },
  name: 'App',
  watch: {
    projects (newval) {
      if (this.$store.state.projects.all && this.$store.state.projects.all.length) return
      if (newval) this.$store.dispatch('getAllProjects', newval)
    },
    technologies (newval) {
      if (this.$store.state.projects.items && this.$store.state.projects.items.length > 1) return
      if (newval) this.$store.commit('setItems', newval)
    }
  },
  computed: {
    user () {
      return this.$store.state.auth.user
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