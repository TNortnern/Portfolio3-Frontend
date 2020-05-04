<template>
  <scrollactive
      active-class="v-list-item--active"
      :offset="120"
      :duration="800"
      bezier-easing-value=".5,0,.35,1"
    >
  <v-navigation-drawer
    v-model="drawerOpen"
    app
    temporary
    dark
    :color="$store.state.constants.colors.darkerBlue"
  >
    <v-list-item>
      <v-list-item-avatar>
        <v-img src="https://i.imgur.com/Sgx3zY5.png"></v-img>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title>Where to?</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense>
      <v-list-item
        v-for="item in $store.state.navItems"
        :key="item.name"
        link
        :to="item.to"
        v-scroll-to="item.to"
        class="scrollactive-item"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.name }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
  </scrollactive>
</template>

<script>
export default {
  props: {
    drawer: {
      type: Boolean,
      default: false
    },
    toggleDrawer: {
      type: Function,
      default: () => { }
    }
  },
  computed: {
    drawerOpen: {
      get () {
        return this.drawer
      },
      set (val) {
        this.toggleDrawer(val)
      }
    }
  }
}
</script>

<style>
</style>