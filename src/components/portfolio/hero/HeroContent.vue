<template>
  <div class="text-center hero__content position--absolute d-flex flex-column justify-center">
    <h2 class="white--text">Hello, I'm <span class="aqua--text">Trayvon Northern</span></h2>
    <h2 class="white--text mt-3">The<span class="aqua--text"> Full Stack</span> <span>Web Developer</span></h2>
    <v-container>
      <v-row
        class="mr-lg-5"
        justify="center"
      >
        <v-col
          cols="7"
          lg="2"
        >
          <v-btn
            class="hero__button"
            color="white"
            outlined
            x-large
            to="#about"
            v-scroll-to="'#about'"
            active-class="no-active-class"
          >
            <span class="headline text-capitalize">Portfolio</span>
            <v-icon
              medium
              class="ml-2 hero__arrow"
            >fas fa-arrow-right</v-icon>

          </v-btn>
        </v-col>
        <v-col
          cols="7"
          lg="2"
        >
          <v-btn
            class="hero__button"
            color="white"
            outlined
            x-large
            href="https://www.docdroid.net/nn6aCtP/tnorthernresume-1-pdf"
            target="__blank"
          >
            <span class="headline text-capitalize">Resume</span>
            <v-icon
              medium
              class="ml-2 hero__resume"
            >fas fa-file</v-icon>

          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '@/assets/styles';

.hero__content {
  width: 100%;
   top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
.hero__button {
  transition: ease .32s;
  &:hover {
    background-color: darken($aqua, 12%) !important;
    border: 1px solid darken($aqua, 12%);
    .hero__arrow {
      transform: rotate(90deg);
    }
    .hero__resume {
      animation: pulse 1s infinite;
    }
  }
}
@keyframes pulse {
	0% {
		transform: scale(1);
	}

	100% {
		transform: scale(1.3);
	}
}
h2 {
  font-size: 3rem;
    font-weight: 400;
    line-height: 3.125rem;
    letter-spacing: normal !important;
}
@include mobile () {
  h2 {
    font-size: 27px !important;
  }
}
</style>