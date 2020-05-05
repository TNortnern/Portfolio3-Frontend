<template>
  <v-container fluid>
    <TabletDrawer
      :routes="routes"
      :drawerOpen="drawerOpen"
      :toggleDrawer="toggleDrawer"
      class="d-block d-lg-none"
    />
    <v-row justify="center">
      <v-col
        class="d-none d-lg-block"
        cols="2"
      >
        <DesktopDrawer :routes="routes" />
      </v-col>

      <v-col
        lg="9"
        cols="12"
      >
        <div class="d-block d-lg-none position--absolute">
          <v-btn
            @click="toggleDrawer()"
            icon
          >
            <v-icon>
              fas fa-arrow-right
            </v-icon>
          </v-btn>
          <div>
            Menu
          </div>
        </div>
        <h1 class="text-center">{{ title }}</h1>
        <Underline styles="margin-bottom: 20px" />
        <slot />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import DesktopDrawer from './DesktopDrawer'
import TabletDrawer from './TabletDrawer'
export default {
  components: {
    DesktopDrawer,
    TabletDrawer
  },
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  methods: {
    toggleDrawer (val) {
      if (val) {
        this.drawerOpen = val
        return
      }
      this.drawerOpen = !this.drawerOpen
    },
  },
  data () {
    return {
      routes: [
        {
          name: 'Projects',
          route: 'projects',
          icon: 'fas fa-th'
        },
        {
          name: 'Technologies',
          route: 'technologies',
          icon: 'fas fa-bolt'
        },
        {
          name: 'Back to Portfolio',
          route: '/',
          icon: 'fas fa-arrow-left'
        },
      ],
      drawerOpen: false
    }
  }
}
</script>

<style>
</style>