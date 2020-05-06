<template>
  <AdminLayout title="Technologies">
    <TechnologyForm
      :adding="adding"
      @toggle="toggleAdding"
    />
    <div class="text-center">

      <v-btn
        color="success"
        large
        @click="toggleAdding()"
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
          <span>
            {{ tech.name }}
          </span>
          <img
            :src="tech.image"
            alt=""
          >
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
      adding: false,
    }
  },
  apollo: {
    technologies: TechnologiesQuery
  },
  methods: {
    toggleAdding () {
      this.adding = !this.adding
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
</style>