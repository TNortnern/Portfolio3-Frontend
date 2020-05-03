<template>
  <div>
    <div class="d-flex justify-center position--relative mt-5">
      <div
        :style="`background-color: ${color}; width: ${width}; ${styles}`"
        class="title-underline"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: '#0b0c10'
    },

    width: {
      type: String,
      default: '70px'
    },
    styles: {
      type: String,
      default: ''
    }

  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles";
</style>