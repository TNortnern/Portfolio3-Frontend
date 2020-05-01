<template>
  <div class="mobile-nav">
    <v-app-bar
      :color="navbarColor"
      dense
      dark
      fixed
      :elevation="scrolledEnough ? 24 : 0"
    >
      <v-spacer />
      <v-app-bar-nav-icon @click="toggleDrawer()"></v-app-bar-nav-icon>
    </v-app-bar>
    <Drawer
      :drawer="drawer"
      :toggleDrawer="toggleDrawer"
    />
  </div>
</template>

<script>
import Drawer from './Drawer'
export default {
  components: {
    Drawer
  },
  data () {
    return {
      scrollPosition: 0,
      drawer: false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.updateScroll)
    this.scrollPosition = window.scrollY
  },
  computed: {
    scrolledEnough () {
      if (this.scrollPosition > 80) {
        return true
      }
      return false
    },
    navbarColor () {
      if (!this.scrolledEnough) {
        return 'transparent'
      }
      return this.$store.state.constants.colors.aqua
    },
  },
  methods: {
    updateScroll () {
      this.scrollPosition = window.scrollY
    },
    toggleDrawer (bool) {
      if (bool) {
        this.drawer = bool
        return
      }
      this.drawer = !this.drawer
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles";
.mobile-nav {
//   display: none;
}
@include mobile() {
  .mobile-nav {
    display: block;
  }
}
</style>