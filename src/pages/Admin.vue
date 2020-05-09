<template>
  <div class="admin">
    <Login  />
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
}
</script>

<style>
</style>