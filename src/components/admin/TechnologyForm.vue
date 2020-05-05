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
              <v-file-input
                chips
                label="Choose Image*"
                v-model="image"
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
import { addTechnology } from '@/graphql/Mutations'
import TechnologiesQuery from '@/graphql/TechnologiesQuery'

export default {
  data () {
    return {
      name: 'test',
      description: 'test',
      image: null,
    }
  },
  apollo: {
  },
  props: {
    adding: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    modal: {
      get () {
        return this.adding
      },
      set (val) {
        this.$emit('toggle', val)
      }
    },
  },
  methods: {
    async submit () {
        console.log(this.image)
      await this.$apollo.mutate({
        mutation: addTechnology,
        variables: {
          name: this.name,
          description: this.description,
          image: this.image
        },
        update: (store, { data: { submit } }) => {
          const data = store.readQuery({ query: TechnologiesQuery })
          console.log(data, submit)
        }
      })
        .then((res) => {
          console.log(res)
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