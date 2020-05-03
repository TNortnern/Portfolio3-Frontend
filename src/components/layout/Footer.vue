<template>
  <div class="footer position--relative">
    <div class="d-flex justify-center footer__go-up">
      <v-hover v-slot:default="{ hover }">
        <v-icon
          :elevation="hover ? 12 : 2"
          class="position--absolute"
          v-scroll-to="'#hero'"
        >
          fas fa-arrow-up
        </v-icon>
      </v-hover>
    </div>
    <p class="text-center">
      Trayvon Northern <span>{{ new Date().getFullYear() }}&copy;</span>
    </p>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "@/assets/styles";
.footer {
  background-color: $darkerBlue;
  color: #fff;
  padding-top: 75px;
  padding-bottom: 40px;
}
.footer__go-up {
  &:hover {
    i {
      // opacity: 0.86;
      animation: bounce 0.8s infinite;
    }
  }
  i {
    top: -17%;
    border-radius: 50%;
    background-color: aqua;
    color: $darkerBlue;
    font-size: 55px;
    height: 75px;
    width: 75px;
    transition: 0.38s ease;
    cursor: pointer;
  }
}
p {
  font-size: 18px;
  span {
    color: $aqua;
  }
}
@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}
</style>