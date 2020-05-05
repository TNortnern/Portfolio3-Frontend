<template>
  <v-navigation-drawer
    dark
    permanent
    app
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
    }
  }
}
</script>

<style>
</style>