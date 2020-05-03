<template>
  <v-col cols="4">
    <v-card>
      <v-img
        :src="images[0]"
        class="white--text align-end"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        height="200px"
      >
        <v-card-title v-text="projectType"></v-card-title>
      </v-img>

      <v-card-actions>
        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-bookmark</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-share-variant</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    images: {
      type: Array,
      default: () => { }
    },
    technologies: {
      type: Array,
      default: () => { }
    },
    description: {
      type: String,
      default: ''
    },
    projectType: {
      type: String,
      default: ''
    },
    links: {
      type: Object,
      default: () => { }
    }
  }
}
</script>

<style>
</style>