<template>
  <v-navigation-drawer
    v-model="drawer"
    dark
    app
    temporary
  >
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title">
          Dashboard
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list
      dense
      nav
    >
      <v-list-item
        v-for="item in routes"
        :key="item.name"
        link
        :to="item.route"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.name }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <template v-slot:append>
      <div class="pa-2">
        <v-btn
          light
          block
        >Logout</v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    routes: {
      type: Array,
      default: () => { }
    },
    drawerOpen: {
      type: Boolean,
      default: false
    },
    toggleDrawer: {
      type: Function,
      default: () => { }
    }
  },
  computed: {
    drawer: {
      get () {
        return this.drawerOpen
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