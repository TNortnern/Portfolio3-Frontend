<template>
  <Layout>
    <Hero />
    <DesktopNavigation />
    <About />
    <Projects />
  </Layout>
</template>

<script>
import Hero from '@/components/portfolio/hero/Hero'
import DesktopNavigation from '@/components/layout/navbar/DesktopNavigation'
import About from '@/components/portfolio/about/About'
import Projects from '@/components/portfolio/projects/Projects'
import Layout from '@/components/layout/Layout'
export default {
  title: 'Portfolio',
  created () {
    document.title = 'Portfolio'
  },
  components: {
    Layout,
    Hero,
    DesktopNavigation,
    About,
    Projects
  }
}
</script>

<style>
</style>