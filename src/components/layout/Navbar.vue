<template>
  <div>
    <MobileNavigation />
    <DesktopNavigation />
  </div>
</template>

<script>
import MobileNavigation from './navbar/MobileNavigation'
import DesktopNavigation from './navbar/DesktopNavigation'
export default {
  components: {
    MobileNavigation,
    DesktopNavigation
  }
}
</script>

<style>
</style>