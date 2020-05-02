<template>
  <Layout>
    <Hero />
    <DesktopNavigation />
    <About />
  </Layout>
</template>

<script>
import Hero from '@/components/portfolio/hero/Hero'
import DesktopNavigation from '@/components/layout/navbar/DesktopNavigation'
import About from '@/components/portfolio/about/About'
import Layout from '@/components/layout/Layout'
export default {
  components: {
    Layout,
    Hero,
    DesktopNavigation,
    About
  }
}
</script>

<style>
</style>