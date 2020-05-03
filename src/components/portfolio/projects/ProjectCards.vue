<template>
  <v-container style="height: 600px; position: relative;">
    <transition-group
      name="zoom"
      tag="div"
      class="row justify-center"
      @before-leave="beforeLeave"
    >
      <ProjectCard
        v-for="project in projects"
        :key="project.name"
        :name="project.name"
        :images="project.images"
        :technologies="project.technologies"
        :description="project.description"
        :project-type="project.type"
        :links="project.links"
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
  computed: {
    projects () {
      if (this.currentFilter !== 'All') {
        return this.$store.state.projects.all.filter(project => project.technologies.includes(this.currentFilter))
      }
      return this.$store.state.projects.all
    },
    currentFilter () {
      return this.$store.state.projects.items[this.$store.state.projects.tab.name].tab
    }
  },
  methods: {
    beforeLeave ($el) {
      // Leave in place.
      const top = $el.offsetTop + 'px'
      const left = $el.offsetLeft + 'px'
      Object.assign($el.style, { left, top })
    },
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
  transition: all 0.4s;
}

.zoom-leave-active {
  animation-direction: reverse;
  transition: all 0.4s ease;
  // opacity: 0;
  position: absolute;
}

.zoom-move {
  transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);
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