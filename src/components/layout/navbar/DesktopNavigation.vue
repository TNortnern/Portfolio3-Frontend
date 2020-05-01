<template>
  <div :style="`width: 100%;background-color: ${$store.state.constants.colors.darkerBlue};`">
    <v-row
      justify="center"
      style="padding: 25px 0; color: white: font-size: 40px;"
    >
      <v-col :cols="cols">
        <p>test</p>
      </v-col>
      <v-col :cols="cols">
        <p>test</p>
      </v-col>
      <v-col :cols="cols">
        <p>test</p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cols: 1
    }
  }
}
</script>

<style>
p {
  color: white;
  font-size: 30px;
}
</style>