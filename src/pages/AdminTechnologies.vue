<template>
  <AdminLayout title="Technologies">
      <TechnologyForm :adding="adding" @toggle="toggleAdding" />
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
        v-for="tech in technologies"
        :key="tech.id"
      >
        {{ tech.name }}
      </v-col>
    </v-row>
  </AdminLayout>
</template>

<script>
import AdminLayout from '@/components/admin/AdminLayout'
import TechnologyForm from '@/components/admin/TechnologyForm'
import TechnologiesQuery from '@/graphql/TechnologiesQuery'

export default {
  components: {
    AdminLayout,
    TechnologyForm
  },
  data () {
    return {
      adding: false
    }
  },
  apollo: {
    technologies: TechnologiesQuery
  },
  methods: {
    toggleAdding () {
      this.adding = !this.adding
    }
  },
}
</script>

<style>
</style>