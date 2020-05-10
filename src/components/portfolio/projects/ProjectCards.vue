<template>
  <v-container
    fluid
    style="position: relative;"
    v-if="projects && projects.length"
  >
    <transition-group
      name="zoom"
      tag="div"
      class="row justify-center"
      @before-leave="beforeLeave"
    >
      <ProjectCard
        v-for="(project, i) in projects"
        :key="project.id"
        :name="project.name"
        :images="project.images"
        :technologies="project.technologies"
        :description="project.description"
        :project-type="project.type"
        :links="project.links"
        :admin="admin"
        :project="project"
        :index="i+4"
        :filtered="filtered"
      />
    </transition-group>
  </v-container>
</template>

<script>
import ProjectCard from './ProjectCard'
export default {
  components: {
    ProjectCard
  },
  props: {
    admin: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      filtered: false
    }
  },
  computed: {
    projects () {
      if (this.currentFilter !== 'All') {
        return this.$store.state.projects.all.filter(project => {
          return project.technologies.some(tech => tech.name === this.currentFilter)
        })
      }
      return this.$store.state.projects.all
    },
    currentFilter () {
      return this.$store.state.projects.items[this.$store.state.projects.tab.name].name
    }
  },
  methods: {
    beforeLeave ($el) {
      // Leave in place.
      const top = $el.offsetTop + 'px'
      const left = $el.offsetLeft + 'px'
      Object.assign($el.style, { left, top })
    },
  },
  watch: {
    currentFilter (newval) {
      if (newval) {
        this.filtered = true
      }
    }
  }
}
</script>

<style lang="scss">
.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: all 0.4s;
}

// NEED TO ADD POSITION: ABSOLUTE TO THE ELEMENT FOR REMOVAL
.fade-leave-active {
  transition: all 0.3s;
  opacity: 0;
  transform: translateY(0);
  position: absolute;
}

.fade-move {
  transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);
  @for $i from 1 through 15 {
    &:nth-child(#{$i}) {
      transition: transform 0.3s #{$i * 0.1}s cubic-bezier(0.77, 0, 0.175, 1);
    }
  }
}

.zoom-enter-active,
.zoom-leave-active {
  animation-duration: 0.5s;
  animation-fill-mode: both;
  animation-name: zoom;
}
.zoom-enter-active {
  transition: all 1.5s ease;
}

.zoom-leave-active {
  animation-direction: reverse;
  transition: all 0.9s ease;
  // opacity: 0;
  position: absolute;
}

.zoom-move {
  transition: all 0.65s cubic-bezier(0.77, 0, 0.175, 1);
  //   @for $i from 1 through 15 {
  //     &:nth-child(#{$i}) {
  //        transition: transform .3s #{$i * 0.1}s cubic-bezier(0.77, 0, 0.175, 1);
  //     }
  //   }
}

@keyframes zoom {
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  100% {
    opacity: 1;
  }
}
</style>