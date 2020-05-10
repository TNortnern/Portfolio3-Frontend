<template>
  <div
    class="mt-4"
    id="about"
  >
    <h1
      data-aos="fade-in"
      class="display-1 text-uppercase text-center mb-0"
    >About</h1>
    <Underline data-aos="fade-in" />
    <v-container>
      <v-row justify="center">
        <AboutBrief
          title="Work Expierence"
          icon="fas fa-user-tie"
        >
          <ul
            class="text-center"
          >
            <li             :data-aos="aosText"
><span class="d-block"><span class="subtitle-2"> - </span> <b>Freelance Developer</b><span class="d-block">RentApplications</span></span> February 2020 to Present</li>
            <li             :data-aos="aosText"
><span class="d-block"><span class="subtitle-2"> - </span> <b>Web Developer</b><span class="d-block">Marlin Network</span></span> July 2019 to December 2019</li>
          </ul>
        </AboutBrief>
        <AboutBrief
          title="Certificates"
          icon="fas fa-award"
        >
          <ul
            class="text-left"
          >
            <li             :data-aos="aosText"
><span class="d-bloc"><span class="subtitle-2"> - </span> <b>MTA - </b></span>HTML/CSS</li>
            <li             :data-aos="aosText"
><span class="d-bloc"><span class="subtitle-2"> - </span> <b>MTA - </b></span> JavaScript</li>
            <li             :data-aos="aosText"
><span class="d-bloc"><span class="subtitle-2"> - </span> <b>MTA - </b></span> MySQL</li>
          </ul>
        </AboutBrief>
        <AboutBrief
          title="Awards"
          icon="fas fa-trophy"
        >
          <ul
            :data-aos="aosText"
            class="text-center"
          >
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
  },
  data () {
    return {
      aosText: 'fade-in'
    }
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