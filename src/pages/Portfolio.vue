<template>
  <Layout>
    <Hero />
    <DesktopNavigation />
    <About />
    <Projects />
    <Contact />
  </Layout>
</template>

<script>
import Hero from '@/components/portfolio/hero/Hero'
import DesktopNavigation from '@/components/layout/navbar/DesktopNavigation'
import About from '@/components/portfolio/about/About'
import Projects from '@/components/portfolio/projects/Projects'
import Contact from '@/components/portfolio/contact/Contact'
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
    Projects,
    Contact
  }
}
</script>

<style>
</style>