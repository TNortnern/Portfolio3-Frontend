<template>
  <div
    class="desktop-navigation"
    :style="`background-color: ${$store.state.constants.colors.darkerBlue};`"
  >
    <scrollactive
      active-class="desktop-navigation__link--active"
      :offset="120"
      :duration="800"
      bezier-easing-value=".5,0,.35,1"
    >
      <v-app-bar
        dark
        :color="$store.state.constants.colors.darkerBlue"
        class="d-flex justify-center"
      >
        <a
          v-for="item in $store.state.navItems"
          :key="item.name"
          class="desktop-navigation__link ml-3 scrollactive-item"
          active-class="desktop-navigation__link--active"
          :href="item.to"
        >
          {{item.name}}
        </a>
      </v-app-bar>
    </scrollactive>
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
.desktop-navigation__link--active,
.is-active {
  background-color: white;
  color: $aqua;
}
</style>