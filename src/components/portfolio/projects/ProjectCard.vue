<template>
  <v-col cols="12" lg="4" xl="3" sm="6">
    <v-card class="position--relative">
      <v-img
        :src="images[0]"
        class="white--text align-end"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        height="280px"
      >
    <div class="mask">
    </div>
        <v-card-title v-text="projectType"></v-card-title>
      </v-img>

      <!-- <v-card-actions>
        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-bookmark</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-share-variant</v-icon>
        </v-btn>
      </v-card-actions> -->
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

<style lang="scss" scoped>
.v-card {
  z-index: 1;
  cursor: pointer;
  &:hover {
    .mask {
      opacity: 1;
    }
  }
}
.mask {
  position: absolute;
  height: 100%;
  opacity: 0;
  transition: .48s ease;
  background-color: rgba(255, 255, 255, .99);
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
}
</style>