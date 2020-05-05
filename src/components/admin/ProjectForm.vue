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
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-textarea
                outlined
                name="description"
                label="Description"
              ></v-textarea>
            </v-col>
            <v-col cols="12">
              <v-autocomplete
                :items="techs"
                label="Technologies*"
                multiple
                chips
                deletable-chips
                no-data-text="Couldn't find technology"
              ></v-autocomplete>
            </v-col>
            <v-col
              cols="12"
              sm="6"
            >
              <v-autocomplete
                :items="['Website', 'Mobile Application']"
                label="Project Type*"
                multiple
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
              ></v-select>
            </v-col>
            <v-col
              sm="6"
              cols="12"
            >
              <v-text-field
                label="Code Link*"
                required
              ></v-text-field>
            </v-col>
            <v-col
              sm="6"
              cols="12"
            >
              <v-text-field label="Hosted Link"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-file-input
                chips
                multiple
                label="Choose Project Images*"
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
          @click="modal = false"
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

export default {
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
    techs () {
      return this.technologies.map(tech => tech.name)
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
  }
}
</script>

<style>
</style>