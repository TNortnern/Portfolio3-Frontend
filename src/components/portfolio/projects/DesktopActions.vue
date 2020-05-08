<template>
  <v-card-actions class="d-none d-sm-flex">
    <v-btn
      dark
      :color="$store.state.constants.colors.darkerBlue"
      :href="hostedLink ? hostedLink : '#'"
      target="__blank"
      link
      large
      style="min-width: 118px"
    >
      View Live
    </v-btn>
    <v-btn
      dark
      :color="buttonColor"
      :href="codeLink ? codeLink : '#'"
      target="__blank"
      link
      large
      style="min-width: 118px"
    >
      View Code
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn
      dark
      :color="buttonColor"
      @click="$emit('close')"
      large
      style="min-width: 118px"
    >
      Close
    </v-btn>
  </v-card-actions>
</template>

<script>
export default {
  props: {
    codeLink: {
      type: String,
      default: ''
    },
    hostedLink: {
      type: String,
      default: ''
    }
  },
  computed: {
    buttonColor () {
      return this.$store.state.constants.colors.darkerBlue
    }
  },
}
</script>

<style>
</style>