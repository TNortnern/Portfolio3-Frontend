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
      :id="project.id"
    />
    <ProjectForm
      @toggle="toggleEditModal"
      :editing="project"
      :open-modal="editModalOpen"
    />

    <div
      v-if="admin"
      class="text-center"
    >
      <v-btn
        icon
        color="red"
        @click="deleteItem(project.id)"
      >
        <v-icon>
          fas fa-times
        </v-icon>
      </v-btn>
    </div>
    <v-card
      class="position--relative"
    >
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
            :key="tech.name"
          >
            {{ tech.name }} <template v-if="i !== technologies.length-1">/</template>
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
            <v-btn
              v-if="admin"
              @click="editModalOpen = !editModalOpen"
              class="project__button mt-3 d-block mx-auto"
              outlined
              x-large
            >
              Edit Project
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
import { deleteProject } from '@/graphql/Mutations'
import ProjectsQuery from '@/graphql/ProjectsQuery'
import ProjectForm from '@/components/admin/ProjectForm'
export default {
  components: {
    ProjectModal,
    ProjectForm
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
      default: () => { }
    },
    admin: {
      type: Boolean,
      default: false
    },
    index: {
      type: Number,
      default: 0
    },
    filtered: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      modalOpen: false,
      editModalOpen: false,
      duration: 385
    }
  },
  methods: {
    toggleModal (val) {
      if (val || val === false) this.modalOpen = val
      else this.modal = !this.modal
    },
    toggleEditModal (val) {
      if (val || val === false) this.editModalOpen = val
      else this.editModalOpen = !this.editModalOpen
    },
    deleteItem (id) {
      this.$apollo.mutate({
        mutation: deleteProject,
        variables: {
          id
        },
        update: (store) => {
          const data = store.readQuery({ query: ProjectsQuery })
          const index = data.projects.findIndex(t => t.id === id)
          if (index !== -1) {
            data.projects.splice(index, 1)
            store.writeQuery({ query: ProjectsQuery, data })
          } else {
            alert('could not find index!')
          }
        },
      })
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