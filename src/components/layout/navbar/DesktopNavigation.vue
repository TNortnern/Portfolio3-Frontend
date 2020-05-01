<template>
  <div
    class="desktop-navigation"
    :style="`background-color: ${$store.state.constants.colors.darkerBlue};`"
  >
    <v-container>
      <v-row
        justify="center"
        class="desktop-navigation__links"
      >
        <v-col :cols="cols">
          <p>test</p>
        </v-col>
        <v-col :cols="cols">
          <p>test</p>
        </v-col>
        <v-col :cols="cols">
          <p>tests</p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cols: 1
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles";
p {
  color: white;
  font-size: 30px;
}
.desktop-navigation__links {
  padding: 10px 0;
  color: white;
  font-size: 40px;
}
.desktop-navigation {
    width: 100%;
  @include mobile() {
    display: none;
  }
}
</style>