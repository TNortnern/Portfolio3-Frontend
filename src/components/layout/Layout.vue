<template>
  <div>
      <Navbar />
        <slot />
      <Footer />
  </div>
</template>

<script>
import Navbar from './Navbar'
import Footer from './Footer'
export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>

</style>