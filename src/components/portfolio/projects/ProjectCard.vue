<template>
  <v-col
    cols="12"
    lg="4"
    xl="3"
    sm="6"
  >
    <ProjectModal
      :modalOpen="modalOpen"
      :toggleModal="toggleModal"
      :project="project"
    />
    <v-card class="position--relative">
      <v-img
        :src="images[0]"
        class="white--text align-end"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        height="280px"
      >
        <div class="mask text-center pt-12">
          <h2>{{ name }}</h2>
          <b
            v-for="(tech, i) in technologies"
            :key="tech"
          >
            {{ tech }} <template v-if="i !== technologies.length-1">/</template>
          </b>
          <div class="text-center mt-8">
            <v-btn
              @click="modalOpen = !modalOpen"
              class="project__button"
              outlined
              x-large
            >
              View Project
            </v-btn>
          </div>
        </div>
        <v-card-title v-text="projectType"></v-card-title>
      </v-img>
    </v-card>
  </v-col>
</template>

<script>
import ProjectModal from './ProjectModal'
export default {
  components: {
    ProjectModal
  },
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
    },
    project: {
      type: Object,
      default: () => {  }
    }
  },
  data () {
    return {
      modalOpen: false
    }
  },
  methods: {
    toggleModal (val) {
      if (val || val === false) this.modalOpen = val
      else this.modal = !this.modal
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles";
.v-card {
  z-index: 1;
  // cursor: pointer;
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
  transition: 0.48s ease;
  background-color: rgba(255, 255, 255, 0.99);
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  color: $darkerBlue;
  b {
    color: $aqua;
  }
}
.project__button {
  border: 3px solid $aqua !important;
  transition: 0.34s ease;
  &:hover {
    background-color: $aqua;
    border: none;
    color: #fff !important;
  }
}
</style>