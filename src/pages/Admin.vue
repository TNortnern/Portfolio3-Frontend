<template>
  <div class="admin">
    <Login v-if="!user" />
  </div>
</template>

<script>
import Login from '@/components/admin/Login'
export default {
  components: {
    Login,
  },
  computed: {
    user () {
      return this.$store.state.auth.user
    }
  },
  mounted () {
    if (this.user) this.$router.push('/projects')
  }
}
</script>

<style>
</style>