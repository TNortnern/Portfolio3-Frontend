<template>
  <v-app id="app">
 <router-view></router-view>
  </v-app>
</template>

<script>

export default {
  name: 'App',
};
</script>
<style lang="scss">
@import '@/assets/styles';
body {
  font-family: 'Raleway', sans-serif !important;

}
</style>