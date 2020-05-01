<template>
  <div
    class="desktop-navigation"
    :style="`background-color: ${$store.state.constants.colors.darkerBlue};`"
  >
    <v-app-bar
      dark
      :color="$store.state.constants.colors.darkerBlue"
      class="d-flex justify-center"
    >
      <router-link
        v-for="item in $store.state.navItems"
        :key="item.name"
        class="desktop-navigation__link ml-3"
        active-class="desktop-navigation__link--active"
        :to="item.to"
      >
        {{item.name}}
      </router-link>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cols: 2
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles";
.desktop-navigation__links {
  color: white;
}
.desktop-navigation {
  width: 100%;
  @include mobile() {
    display: none;
  }
}
.desktop-navigation__link {
  font-size: 24px;
  text-transform: uppercase;
  color: white;
  text-decoration: none;
  transition: ease 0.28s;
  padding: 2px 20px;
  &:hover {
    background-color: white;
    color: $aqua;
  }
}
.desktop-navigation__link--active {
  background-color: white;
  color: $aqua;
}
</style>