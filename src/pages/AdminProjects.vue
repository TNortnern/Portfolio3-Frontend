<template>
  <AdminLayout title="Projects">
    <div class="text-center">

      <v-btn
        color="success"
        large
      >
        Add Project
      </v-btn>
    </div>
    <ProjectCards />
  </AdminLayout>
</template>

<script>
import AdminLayout from '@/components/admin/AdminLayout'
import ProjectCards from '@/components/portfolio/projects/ProjectCards'
export default {
  components: {
    ProjectCards,
    AdminLayout
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
      ]
    }
  }
}
</script>

<style>
</style>