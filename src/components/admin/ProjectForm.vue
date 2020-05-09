<template>
  <div>
    <v-overlay :value="loading">
      <v-progress-circular
        indeterminate
        size="64"
      ></v-progress-circular>
    </v-overlay>
    <v-dialog
      v-model="modal"
      max-width="600px"
      v-if="modal"
    >
      <v-card class="position--relative">
        <v-card-title class="d-flex justify-center">
          <span
            class="headline"
            :style="`color: ${$store.state.constants.colors.darkerBlue}`"
          >Project Form</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Name of Project*"
                  required
                  v-model="name"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea
                  outlined
                  name="description"
                  label="Description"
                  v-model="description"
                ></v-textarea>
              </v-col>
              <v-col cols="12">
                <v-autocomplete
                  :items="techs"
                  :item-text="techs.name"
                  :item-value="techs.id"
                  label="Technologies*"
                  multiple
                  chips
                  deletable-chips
                  no-data-text="Couldn't find technology"
                  v-model="technologyItems"
                ></v-autocomplete>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-autocomplete
                  :items="['Website', 'Mobile Application']"
                  label="Project Type*"
                  v-model="projectType"
                ></v-autocomplete>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-select
                  :items="importanceNumbers"
                  label="Importance"
                  required
                  v-model="importance"
                ></v-select>
              </v-col>
              <v-col
                sm="6"
                cols="12"
              >
                <v-text-field
                  label="Code Link*"
                  required
                  v-model="codeLink"
                ></v-text-field>
              </v-col>
              <v-col
                sm="6"
                cols="12"
              >
                <v-text-field
                  v-model="hostedLink"
                  label="Hosted Link"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-file-input
                  chips
                  multiple
                  label="Choose Images*"
                  v-model="images"
                ></v-file-input>
                <v-container v-if="projectImages && projectImages.length">
                  <v-row justify="space-between">
                    <v-col
                      v-for="image in projectImages"
                      :key="image"
                      cols="6"
                    >
                      <img
                        style="width: 100%;"
                        :src="image"
                        alt="image to be uploaded"
                      >
                    </v-col>
                  </v-row>
                </v-container>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            :color="$store.state.constants.colors.darkerBlue"
            dark
            @click="submit"
          ><template v-if="!editing">Add</template><template v-else>Update</template></v-btn>
          <v-btn
            :color="$store.state.constants.colors.darkerBlue"
            dark
            @click="modal = false"
          >Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import TechnologiesQuery from '@/graphql/TechnologiesQuery'
import ProjectsQuery from '@/graphql/ProjectsQuery'
import ProjectQuery from '@/graphql/ProjectQuery'
import { addProject, editProject } from '@/graphql/Mutations'

export default {
  data () {
    return {
      name: '',
      description: '',
      technologyItems: [],
      codeLink: '',
      hostedLink: '',
      images: [],
      projectType: 'Website',
      importance: 0,
      projectImages: [],
      loading: false,
      technologies: []
    }
  },
  async mounted () {
    if (this.editing) this.$apollo.queries.project.refresh()
     if (this.$store.state.projects.items.length > 1) {
      this.technologies = this.$store.state.projects.items.filter(tech => tech.name !== 'All')
    }
    else {
      await this.$apollo.query({
        query: TechnologiesQuery
      })
      .then(({data}) => {
        // console.log(data)
        this.technologies = data.technologies
      })
    }
  },
  apollo: {
    project: {
      query: ProjectQuery,
      variables () {
        return {
          id: this.editing.id ? this.editing.id : ''
        }
      },
      skip () {
        return this.skipQuery
      },
    }
  },
  props: {
    openModal: {
      type: Boolean,
      default: false
    },
    editing: {
      type: Object,
      default: () => { }
    }
  },
  computed: {
    links () {
      return [this.codeLink, this.hostedLink]
    },
    techs () {
      if (!this.technologies) return []
      return this.technologies.map(tech => {
        return { text: tech.name, value: tech.id }
      })
    },
    techIds () {
      let ids = []
      this.technologyItems.forEach(tech => {
        ids = [...ids, this.technologies.indexOf(tech)]
      })
      return ids
    },
    modal: {
      get () {
        return this.openModal
      },
      set (val) {
        this.$emit('toggle', val)
        if (!val) this.currentProj = null
      }
    },
    importanceNumbers () {
      let numbers = []
      for (let i = 0; i <= 100; i++) {
        numbers = [...numbers, i]
      }
      return numbers
    }
  },
  methods: {
    async submit () {
      this.loading = true
      this.modal = false

      if (!this.editing) {
        await this.addProject()
      } else {
        await this.editProject()
      }
    },
    async addProject () {

      await this.$apollo.mutate({
        mutation: addProject,
        variables: {
          name: this.name,
          description: this.description,
          projectType: this.projectType,
          technologies: this.technologyItems,
          links: this.links,
          importance: this.importance,
          images: this.images
        },
        update: (store, { data: { addProject } }) => {
          const data = store.readQuery({ query: ProjectsQuery })
          data.projects.push(addProject)
          store.writeQuery({ query: ProjectsQuery, data })
        },
      })
        .then(() => {
          this.name = ''
          this.description = ''
          this.technologyItems = []
          this.codeLink = ''
          this.hostedLink = ''
          this.images = []
          this.projectType = 'Website'
          this.importance = 0
          this.loading = false
          this.modal = true
        })
        .catch((err) => {
          console.error(err)
          this.loading = false
          this.modal = true
        })
    },
    async editProject () {
      await this.$apollo.mutate({
        mutation: editProject,
        variables: {
          id: this.project.id,
          name: this.name,
          description: this.description,
          projectType: this.projectType,
          technologies: this.technologyItems.length ? this.technologyItems : undefined,
          links: this.links[0] || this.links[1] ? this.links : undefined,
          importance: this.importance,
          images: this.images.length ? this.images : undefined
        },
        update: (store, { data: { editProject } }) => {
          const data = store.readQuery({ query: ProjectsQuery })
          const index = data.projects.findIndex(p => p.id === editProject.id)
          data.projects[index] = editProject
          store.writeQuery({ query: ProjectsQuery, data })
        },
      })
        .then(() => {
          this.name = ''
          this.description = ''
          this.technologyItems = []
          this.codeLink = ''
          this.hostedLink = ''
          this.images = []
          this.projectType = 'Website'
          this.importance = 0
          this.loading = false
        })
        .catch((err) => {
          console.error(err)
          this.loading = false
          this.modal = true
        })
    },
  },
  watch: {
    project (newval) {
      if (newval) {
        this.name = this.project.name
        this.description = this.project.description
        this.codeLink = this.project.links.codeLink
        this.hostedLink = this.project.links.hostedLink
        this.projectImages = this.project.images
        this.projectType = this.project.projectType
        this.importance = this.project.importance
      }
    },
    images (newval) {
      if (newval) {
        this.projectImages = []
        newval.forEach(f => {
          let reader = new FileReader();
          let vm = this;
          reader.onload = function (e) {
            vm.projectImages.push(e.target.result);
          }
          reader.readAsDataURL(f);
        });
      } else {
        this.projectImages = []
      }
    }
  }
}
</script>

<style>
</style>