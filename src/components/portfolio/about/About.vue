<template>
  <div
    class="mt-4"
    id="about"
  >
    <v-container>
      <v-row justify="center">
        <AboutBrief title="Work Expierence" icon="fas fa-user-tie" title-classes="ml-3 ml-lg-8">
          <ul class="text-center ml-lg-8">
            <li><span class="d-block"><span class="subtitle-2"> - </span> <b>Web Developer</b><span class="d-block">Marlin Network</span></span> July 2019 to December 2019</li>
            <li><span class="d-block"><span class="subtitle-2"> - </span> <b>Freelance Developer</b><span class="d-block">RentApplications</span></span> February 2020 to Present</li>
          </ul>
        </AboutBrief>
        <AboutBrief title="Certificates" icon="fas fa-user-tie" title-classes="ml-md-9">
          <ul class="text-center ml-md-9">
            <li><span class="d-block"><span class="subtitle-2"> - </span> <b>MTA</b></span>HTML/CSS</li>
            <li><span class="d-block"><span class="subtitle-2"> - </span> <b>MTA</b></span> JavaScript</li>
            <li><span class="d-block"><span class="subtitle-2"> - </span> <b>MTA</b></span> MySQL</li>
          </ul>
        </AboutBrief>
        <AboutBrief title="Awards" icon="fas fa-user-tie" title-classes="ml-md-12">
          <ul class="text-center ml-md-11">
            <li><span class="d-block"><span class="subtitle-2"> - </span> <b>Hack4Good</b><span class="d-block">1st Place</span></span> December 2019</li>
          </ul>
        </AboutBrief>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import AboutBrief from './AboutBrief'
export default {
components: {
    AboutBrief
}
}
</script>

<style lang="scss" scoped>
</style>