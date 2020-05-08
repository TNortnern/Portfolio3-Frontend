<template>
  <v-card-actions class="d-flex justify-center d-sm-none">
    <v-btn
      dark
      :color="buttonColor"
      :href="hostedLink ? hostedLink : '#'"
      target="__blank"
      link
    >
      View Live
    </v-btn>
    <v-btn
      dark
      :color="buttonColor"
      :href="codeLink ? codeLink : '#'"
      target="__blank"
      link
    >
      View Code
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn
      icon
      @click="$emit('close')"
    >
      <v-icon>
        fas fa-times
      </v-icon>
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