<template>
  <v-app id="app">
    <router-view></router-view>
  </v-app>
</template>

<script>
import projects from '@/dummy/projects'
export default {
  name: 'App',
  mounted () {
    this.$store.dispatch('getAllProjects', projects)
  },
};
</script>
<style lang="scss">
@import "@/assets/styles";
body {
  font-family: "Raleway", sans-serif !important;
}
</style>