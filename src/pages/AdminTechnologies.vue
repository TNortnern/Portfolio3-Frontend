<template>
  <AdminLayout title="Technologies">
    <TechnologyForm
      :modal="modal"
      @toggle="toggleModal"
      :technology="technology"
    />
    <div class="text-center">

      <v-btn
        color="success"
        large
        @click="toggleModal()"
      >
        Add Technology
      </v-btn>
    </div>
    <v-row>
      <v-col
        cols="6"
        md="3"
        v-for="tech in technologies"
        :key="tech.id"
      >
        <div class="d-flex flex-column align-center">
          <v-btn
            @click="deleteItem(tech.id)"
            color="red"
            icon
          >
            <v-icon>
              fas fa-times
            </v-icon>
          </v-btn>
          <div class="text-center tech-item">
            <span>
              {{ tech.name }}
            </span>
            <img
              :src="tech.image"
              alt=""
              class="d-block"
            >
          </div>
          <v-btn
            @click="modal = true, technology = tech"
            :color="$store.state.constants.colors.blackish"
            dark
            class="tech-edit"
          >
            Edit
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </AdminLayout>
</template>

<script>
import AdminLayout from '@/components/admin/AdminLayout'
import TechnologyForm from '@/components/admin/TechnologyForm'
import TechnologiesQuery from '@/graphql/TechnologiesQuery'
import { deleteTechnology } from '@/graphql/Mutations'

export default {
  components: {
    AdminLayout,
    TechnologyForm
  },
  data () {
    return {
      modal: false,
      technology: null,
      technologies: []
    }
  },
  async mounted () {
    if (this.$store.state.projects.items.length > 1) {
      this.technologies = this.$store.state.projects.items.filter(tech => tech.name !== 'All')
    }
    else {
      await this.$apollo.query({
        query: TechnologiesQuery
      })
        .then(({ data }) => {
          this.technologies = data.technologies
        })
        .catch(err => {
          console.log('something went wrong', err)
        })
    }
  },
  methods: {
    toggleModal () {
      this.modal = !this.modal
    },
    deleteItem (id) {
      this.$apollo.mutate({
        mutation: deleteTechnology,
        variables: {
          id
        },
        update: (store) => {
          const data = store.readQuery({ query: TechnologiesQuery })
          const index = data.technologies.findIndex(t => t.id === id)
          if (index !== -1) {
            data.technologies.splice(index, 1)
            store.writeQuery({ query: TechnologiesQuery, data })
          } else {
            alert('could not find index!')
          }
        },
      })
    }
  },
}
</script>

<style lang="scss" scoped>
img {
  width: 60px;
  height: 60px;
}
.tech-item {
}
</style>