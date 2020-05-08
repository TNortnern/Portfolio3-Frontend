<template>
  <AdminLayout title="Projects">
    <div class="text-center">

      <v-btn
        color="success"
        large
        @click="toggleAdding()"
      >
        Add Project
      </v-btn>
    </div>
    <ProjectForm :openModal="adding" @toggle="toggleAdding" />
    <ProjectCards :admin="true" />
  </AdminLayout>
</template>

<script>
import AdminLayout from '@/components/admin/AdminLayout'
import ProjectForm from '@/components/admin/ProjectForm'
import ProjectCards from '@/components/portfolio/projects/ProjectCards'
export default {
  components: {
    ProjectCards,
    AdminLayout,
    ProjectForm
  },
  data () {
    return {
      routes: [
        {
          name: 'Projects',
          route: 'projects',
          icon: 'fas fa-th'
        },
        {
          name: 'Technologies',
          route: 'technologies',
          icon: 'fas fa-bolt'
        },
        {
          name: 'Back to Portfolio',
          route: '/',
          icon: 'fas fa-arrow-left'
        },
      ],
      adding: false
    }
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