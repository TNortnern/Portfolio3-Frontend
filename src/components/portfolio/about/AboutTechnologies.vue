<template>
  <v-col
    class="text-center"
    cols="2"
  >
    <div class="about__language">
      <img
        :src="'https://upload.wikimedia.org/wikipedia/commons/3/3c/Nuxt-js.png'"
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
span {
  opacity: 0;
  transition: .26s ease;
}
img {
  width: 100%;
  max-height: 56px;
  display: inline-flex;
  align-content: center;
}
.about__language {
  &:hover {
    span {
      opacity: 1;
    }
  }
}
</style>