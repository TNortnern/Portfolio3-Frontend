<template>
  <div>
    <div class="d-flex justify-center position--relative">
      <div
        :style="`background-color: ${color}; width: ${width}`"
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
      default: '80px'
    },

  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles";
</style>