<template>
  <v-navigation-drawer
    v-model="drawerOpen"
    app
    temporary
  >
    <!-- <v-list-item>
      <v-list-item-avatar>
        <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title>John Leider</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider> -->

    <v-list dense>
      <v-list-item
        v-for="item in $store.state.navItems"
        :key="item.name"
        link
        :to="item.to"
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