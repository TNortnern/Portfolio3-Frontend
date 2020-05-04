<template>
  <div id="hero" class="hero position--relative">
    <HeroContent />
    <vue-particles
      color="#46a29f"
      :particleOpacity="1"
      :particlesNumber="110"
      shapeType="circle"
      :particleSize="4"
      linesColor="#dedede"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
      style="height: 100%"
    >
    </vue-particles>
  </div>
</template>

<script>
import HeroContent from '@/components/portfolio/hero/HeroContent'
export default {
  methods: {
    randomColor () {
      const listOfColors = ['#ffb84d', '#b300b3', '#000099', '#0000cc']
      return listOfColors[Math.floor(Math.random() * listOfColors.length)]
    }
  },
  components: {
    HeroContent
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles';
.hero {
  background-color: $blackish;
  height: 1000px;
  width: 100%;
}

</style>