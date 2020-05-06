<template>
  <div id="projects">
    <h1 class="display-1 text-uppercase text-center mb-0">Projects</h1>
    <Underline />
    <v-tabs
      v-model="tab"
      :background-color="$store.state.constants.colors.gray"
      light
      centered
      :slider-color="$store.state.constants.colors.blackish"
      :color="$store.state.constants.colors.blackish"
    >
      <v-tab
        v-for="item in items"
        :key="item.name"
      >
        {{ item.name }}
      </v-tab>
    </v-tabs>
    <ProjectCards />
  </div>
</template>

<script>
import ProjectCards from './ProjectCards'
export default {
  components: {
    ProjectCards
  },

  computed: {
    tab: {
      get () {
        return this.$store.state.projects.tab
      },
      set (val) {
        this.$store.commit('setTab', val)
      }
    },
    items () {
      return this.$store.state.projects.items
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles";
#projects {
  background-color: $gray;
  padding-top: 70px;
  min-height: 900px;
}
</style>