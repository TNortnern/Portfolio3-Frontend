<template>
  <v-row>
    <v-col cols="2">
      <v-navigation-drawer
        dark
        permanent
        style="height: 98.5vh"
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
          <v-btn light block>Logout</v-btn>
        </div>
      </template>
      </v-navigation-drawer>
    </v-col>
    <v-col>
      test
    </v-col>
  </v-row>
</template>

<script>
export default {
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
      ]
    }
  }
}
</script>

<style>
</style>