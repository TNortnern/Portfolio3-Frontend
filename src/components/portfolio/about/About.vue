<template>
  <div
    class="mt-4"
    id="about"
  >
    <h1 class="display-1 text-uppercase text-center mb-0">About</h1>
    <Underline />
    <v-container>
      <v-row justify="center">
        <AboutBrief
          title="Work Expierence"
          icon="fas fa-user-tie"
        >
          <ul class="text-center">
            <li><span class="d-block"><span class="subtitle-2"> - </span> <b>Freelance Developer</b><span class="d-block">RentApplications</span></span> February 2020 to Present</li>
            <li><span class="d-block"><span class="subtitle-2"> - </span> <b>Web Developer</b><span class="d-block">Marlin Network</span></span> July 2019 to December 2019</li>
          </ul>
        </AboutBrief>
        <AboutBrief
          title="Certificates"
          icon="fas fa-award"
        >
          <ul class="text-left">
            <li><span class="d-bloc"><span class="subtitle-2"> - </span> <b>MTA - </b></span>HTML/CSS</li>
            <li><span class="d-bloc"><span class="subtitle-2"> - </span> <b>MTA - </b></span> JavaScript</li>
            <li><span class="d-bloc"><span class="subtitle-2"> - </span> <b>MTA - </b></span> MySQL</li>
          </ul>
        </AboutBrief>
        <AboutBrief
          title="Awards"
          icon="fas fa-trophy"
        >
          <ul class="text-center">
            <li><span class="d-block"><span class="subtitle-2"> - </span> <b>Hack4Good</b><span class="d-block">1st Place</span></span> December 2019</li>
          </ul>
        </AboutBrief>
      </v-row>
      <AboutDescription />
    </v-container>
  </div>
</template>

<script>
import AboutBrief from './AboutBrief'
import AboutDescription from './AboutDescription'
import Underline from '../misc/Underline'
export default {
  components: {
    AboutBrief,
    AboutDescription,
    Underline
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles";
@import url("https://fonts.googleapis.com/css?family=Roboto+Condensed&display=swap");
h1 {
  font-family: "Roboto Condensed", sans-serif;
}
</style>