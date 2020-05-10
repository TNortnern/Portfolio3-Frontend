<template>
  <v-col
    class="about__item d-flex flex-column align-center"
    cols="12"
    sm="4"
  >
    <div
      :data-aos="aosIcons"
      :data-aos-duration="duration"
      class="about__item__icon"
    >
      <i :class="`${icon} d-flex justify-center align-center`"></i>
    </div>
    <h2 data-aos="fade-in" :class="titleClasses">{{ title }}</h2>
    <slot />
  </v-col>
</template>

<script>
export default {
  data: () => ({
    aosIcons: 'zoom-in',
    duration: 415
  }),
  props: {
    title: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    titleClasses: {
      type: String,
      default: ''
    },
  }
}
</script>

<style  lang="scss" scoped>
@import "@/assets/styles";

.about__item {
  i {
    font-size: 35px;
    border-radius: 50%;
    background-color: $blackish;
    width: 82px;
    height: 82px;
    color: white;
  }

  p {
    font-size: 20px;
  }
}
ul,
li {
  padding: 0 !important;
  margin: 0;
  list-style: none;
  margin: 4px 0;
}
</style>