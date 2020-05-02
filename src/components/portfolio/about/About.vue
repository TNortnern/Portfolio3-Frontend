<template>
  <div
    class="mt-4"
    id="about"
  >
    <v-container>
      <v-row justify="center">
        <AboutBrief title="Work Expierence" icon="fas fa-user-tie">
          <ul class="text-center">
            <li><span class="d-block"><span class="subtitle-2"> - </span> <b>Freelance Developer</b><span class="d-block">RentApplications</span></span> February 2020 to Present</li>
            <li><span class="d-block"><span class="subtitle-2"> - </span> <b>Web Developer</b><span class="d-block">Marlin Network</span></span> July 2019 to December 2019</li>
          </ul>
        </AboutBrief>
        <AboutBrief title="Certificates" icon="fas fa-user-tie">
          <ul class="text-center">
            <li><span class="d-block"><span class="subtitle-2"> - </span> <b>MTA</b></span>HTML/CSS</li>
            <li><span class="d-block"><span class="subtitle-2"> - </span> <b>MTA</b></span> JavaScript</li>
            <li><span class="d-block"><span class="subtitle-2"> - </span> <b>MTA</b></span> MySQL</li>
          </ul>
        </AboutBrief>
        <AboutBrief title="Awards" icon="fas fa-user-tie">
          <ul class="text-center">
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