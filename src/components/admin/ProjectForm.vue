<template>
  <v-dialog
    v-model="modal"
    max-width="600px"
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
        >Add</v-btn>
        <v-btn
          :color="$store.state.constants.colors.darkerBlue"
          dark
          @click="modal = false"
        >Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import TechnologiesQuery from '@/graphql/TechnologiesQuery'
import ProjectsQuery from '@/graphql/ProjectsQuery'
import { addProject } from '@/graphql/Mutations'

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
      importance: 0
    }
  },
  apollo: {
    technologies: TechnologiesQuery
  },
  props: {
    adding: {
      type: Boolean,
      default: false
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
        return this.adding
      },
      set (val) {
        this.$emit('toggle', val)
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
        }
      })
        .then(() => {
          // console.log(data.addProject)
          //  this.$store.dispatch('addProject', data.addProject)
        })
        .catch((err) => {
          console.error(err)
        })
    }
  }
}
</script>

<style>
</style>