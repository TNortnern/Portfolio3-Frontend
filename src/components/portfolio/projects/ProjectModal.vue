<template>
  <v-dialog
    v-model="modal"
    width="900"
  >
    <v-card>
      <v-btn
        class="modal__close--mobile"
        icon
      >
        <v-icon>
          fas fa-times
        </v-icon>
      </v-btn>
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
            style="border-bottom: 4px solid rgba(0, 0, 0, 0.6)"
          ></v-img>

        </v-carousel-item>
      </v-carousel>
      <v-card-text class="mt-3">
        <h1 class="mb-3">
          {{ project.name }}
        </h1>
        <span style="margin-left: 2px">{{ project.type }}</span>
        <v-divider class="mt-2"></v-divider>

        <p class="mt-6">{{ project.description }}</p>
      </v-card-text>

      <v-card-actions class="d-none d-sm-flex">
        <v-btn
          dark
          :color="$store.state.constants.colors.darkerBlue"
          @click="modal = false"
          large
          style="min-width: 118px"
        >
          View Live
        </v-btn>
        <v-btn
          dark
          :color="buttonColor"
          @click="modal = false"
          large
          style="min-width: 118px"
        >
          View Code
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          dark
          :color="buttonColor"
          @click="modal = false"
          large
          style="min-width: 118px"
        >
          Close
        </v-btn>
      </v-card-actions>
      <v-card-actions class="d-flex justify-center d-sm-none">
        <v-btn
          dark
          :color="buttonColor"
          @click="modal = false"
        >
          View Live
        </v-btn>
        <v-btn
          dark
          :color="buttonColor"
          @click="modal = false"
        >
          View Code
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          icon
          @click="modal = false"
        >
          <v-icon>
            fas fa-times
          </v-icon>
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
    },
    buttonColor () {
        return this.$store.state.constants.colors.darkerBlue
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles";
p,
span {
  font-size: 1.3em;
  @include mobile() {
    font-size: 1.1em;
  }
}
span {
  color: #c0c0c0;
  font-weight: bold;
}
h1 {
  font-size: 28px;
  @include mobile() {
    font-size: 22px;
  }
}
.v-card__actions {
  @include mobile() {
    justify-content: center;
  }
}
.modal__close--mobile {
  position: absolute;
}
</style>