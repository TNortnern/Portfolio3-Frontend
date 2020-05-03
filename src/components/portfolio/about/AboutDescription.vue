<template>
  <v-container class="mt-8">
    <v-row justify="space-between">
      <v-col
        cols="6"
        class="text-center"
      >
        <img
          src="https://u5u9p8d6.stackpathcdn.com/wp-content/uploads/2019/05/042.jpg"
          alt="person typing"
          class="about__description-image"
        >
        <h3 class="display-1">Who am I?</h3>
        <p>I'm a recent CS Grad that is passionate about Web Development. I enjoy frontend development and stride to get better everyday.</p>
      </v-col>
      <v-col cols="6">
        <h3 class="display-1 text-center text-uppercase">Technologies</h3>
        <Underline styles="margin-bottom: 0;" />
        <v-row justify="center">
          <AboutTechnologies v-for="tech in techs" :key="tech.name" :name="tech.name" :image="tech.image" />
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AboutTechnologies from './AboutTechnologies'
export default {
  components: {
    AboutTechnologies
  },
  data () {
    return {
      techs: [
        { name: "HTML/CSS", image: '@/assets/skills/htmlcss.png' },
        { name: "JavaScript", image: '@/assets/skills/htmlcss.png' },
        { name: "Vue", image: '@/assets/skills/htmlcss.png' },
        { name: "Nuxt", image: '@/assets/skills/htmlcss.png'},
        { name: "React", image: '@/assets/skills/htmlcss.png' },
        { name: "ReactNative", image: '@/assets/skills/htmlcss.png' },
        { name: "Redux", image: '@/assets/skills/htmlcss.png' },
        { name: "Express", image: '@/assets/skills/htmlcss.png' },
        { name: "PHP", image: '@/assets/skills/htmlcss.png' },
        { name: "Laravel",image: '@/assets/skills/htmlcss.png'},
        { name: "MySQL", image: '@/assets/skills/htmlcss.png' },
        { name: "SQL", image: '@/assets/skills/htmlcss.png' },
        { name: "MVC", image: '@/assets/skills/htmlcss.png' },
        { name: "Java", image: '@/assets/skills/htmlcss.png' },
        { name: "GraphQL/Apollo", image: '@/assets/skills/htmlcss.png' },
        { name: "SCSS", image: '@/assets/skills/htmlcss.png' },
        { name: "MJML", image: '@/assets/skills/htmlcss.png' },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles";
$width: 380px;
h3 {
  color: $darkerBlue;
}
.about__description-image {
  width: $width;
  border-radius: 50%;
  height: $width;
  border: 2px solid $darkerBlue;
}
p {
  font-size: 20px;
  color: #616161;
  // width: $width;
}
</style>