<template>
  <v-col
    class="text-center"
    lg="2"
    sm="4"
    cols="4"
  >
    <div class="about__language">
      <img
        :src="image ? require(`@/assets/skills/${image}`) : 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Nuxt-js.png'"
        alt="img"
      >
      <span>{{ name }}</span>
    </div>
  </v-col>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles';
span {
  opacity: 0;
  transition: .26s ease;
  font-size: 15px;
}
img {
  width: 100%;
  max-height: 56px;
  display: inline-flex;
  align-content: center;
  @include mobile () {
    max-height: 80px;
  }
}
.about__language {
  &:hover {
    span {
      opacity: 1;
    }
  }
}
</style>