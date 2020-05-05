<template>
  <div class="admin">
    <Login v-if="!$store.state.auth.user" />
    <Dashboard v-else />
  </div>
</template>

<script>
import Login from '@/components/admin/Login'
import Dashboard from '@/components/admin/Dashboard'
export default {
  components: {
    Login,
    Dashboard
  }
}
</script>

<style>

</style>