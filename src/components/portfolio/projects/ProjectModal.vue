<template>
  <v-dialog
    v-model="modal"
    width="730"
  >
    <v-card v-if="project">
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
      <DesktopActions
        :code-link="code"
        :hosted-link="hosted"
        :button-color="buttonColor"
        @close="close"
      />
      <MobileActions
        :code-link="code"
        :hosted-link="hosted"
        :button-color="buttonColor"
        @close="close"
      />

    </v-card>
  </v-dialog>
</template>

<script>
import ProjectQuery from '@/graphql/ProjectQuery'
import DesktopActions from './DesktopActions'
import MobileActions from './MobileActions'
export default {
  components: {
    DesktopActions,
    MobileActions
  },
  props: {
    modalOpen: {
      type: Boolean,
      default: false
    },
    id: {
      type: String,
      default: ''
    },
    toggleModal: {
      type: Function,
      default: () => { }
    }
  },
  apollo: {
    project: {
      query: ProjectQuery,
      variables () {
        return {
          id: this.id ? this.id : ''
        }
      },
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
    },
    hosted () {
      return '//'+ this.project.links.hostedLink
    },
    code () {
      return '//' + this.project.links.codeLink
    }
  },
  methods: {
    close () {
      this.toggleModal(false)
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