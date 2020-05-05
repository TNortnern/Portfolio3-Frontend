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
        id="nav"
        :fixed="fixedNav"
        :class="fixedNav ? 'nav-slide-in' : ''"
        ref="navbar"
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
      scrollPosition: 0
    }
  },
  mounted () {
    window.addEventListener('scroll', this.updateScroll)
    this.scrollPosition = window.scrollY;
  },
  computed: {
    scrolledEnough () {
      if (this.scrollPosition > 885) {
        return true
      }
      return false
    },
    fixedNav () {
      if (!this.scrolledEnough) {
        return false
      }
      return true
    },
  },
  methods: {
    updateScroll () {
      this.scrollPosition = window.scrollY;
    },

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
  min-height: 56px;
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
.nav-slide-in {
  animation: slide-in 0.6s;
}
@keyframes slide-in {
  0% {
    transform: translateY(-400px);
  }
  100% {
    transform: translateY(0px);
  }
}
</style>