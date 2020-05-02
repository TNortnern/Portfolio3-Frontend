<template>
  <div
    class="mt-4"
    id="about"
  >
    <v-container>
      <v-row justify="center">
        <AboutBrief title="Work Expierence" icon="fas fa-user-tie" title-classes="ml-3">
          <ul>
            <li><span class="d-block"><span class="subtitle-2"> - </span> <b>Web Developer</b> at Marlin Network</span> July 2019 to December 2019</li>
            <li><span class="d-block"><span class="subtitle-2"> - </span> <b>Freelance Developer</b> at RentApplications</span> February 2020 to Present</li>
          </ul>
        </AboutBrief>
        <AboutBrief title="Certificates" icon="fas fa-user-tie" title-classes="ml-7">
          <ul>
            <li><span class="d-block"><span class="subtitle-2"> - </span> <b>MTA</b></span>Programming using HTML and CSS</li>
            <li><span class="d-block"><span class="subtitle-2"> - </span> <b>MTA</b></span> Programming use JavaScript</li>
            <li><span class="d-block"><span class="subtitle-2"> - </span> <b>MTA</b></span> Programming using MySQL</li>
          </ul>
        </AboutBrief>
        <AboutBrief title="Work Expierence" icon="fas fa-user-tie">
          <ul>
            <li><span class="d-block"><span class="subtitle-2"> - </span> <b>Web Developer</b> at Marlin Network</span> July 2019 to December 2019</li>
            <li><span class="d-block"><span class="subtitle-2"> - </span> <b>Freelance Developer</b> at RentApplications</span> February 2020 to Present</li>
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