<template>
  <v-dialog
    v-model="modal"
    width="700"
  >
    <v-card>
      <v-carousel
        cycle
        class="project__modal-image"
        show-arrows-on-hover
        hide-delimiters
        height="auto"
      >
        <v-carousel-item
          v-for="image in project.images"
          :key="image"
        >
          <v-img
            :src="image"
            aspect-ratio="1.77"
          ></v-img>

        </v-carousel-item>
      </v-carousel>
      <v-card-text>
        <h1 class="mb-3">
          {{ project.name }}
        </h1>
        <span style="margin-left: 2px">{{ project.type }}</span>
            <v-divider class="mt-2"></v-divider>

        <p class="mt-6">{{ project.description }}</p>
      </v-card-text>


      <v-card-actions class="d-flex justify-center">
        <v-btn
          color="primary"
          text
          @click="modal = false"
        >
          View Project
        </v-btn>
        <v-btn
          color="primary"
          text
          @click="modal = false"
        >
          View Code
        </v-btn>
        <v-btn
          color="primary"
          text
          @click="modal = false"
        >
          Close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    modalOpen: {
      type: Boolean,
      default: false
    },
    project: {
      type: Object,
      default: () => { }
    },
    toggleModal: {
      type: Function,
      default: () => { }
    }
  },
  computed: {
    modal: {
      get () {
        return this.modalOpen
      },
      set (val) {
        this.toggleModal(val)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles";
p,
span {
  font-size: 1.3em;
}
span {
  color: #c0c0c0;
  font-weight: bold;
}
h1 {
    font-size: 28px;
}
.project__modal-image {
  height: 500px !important;
  @include mobile() {
    height: 400px !important;
  }
}
</style>