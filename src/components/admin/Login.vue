<template>
  <div>
    <v-container
      class="d-flex justify-center align-center"
      style="height: 100vh"
    >
      <ValidationObserver ref="observer">
        <h1 class="text-center">Admin Portal</h1>
        <form>
          <ValidationProvider
            v-slot="{ errors }"
            name="email"
            rules="required|email"
          >
            <v-text-field
              v-model="email"
              :error-messages="errors"
              label="E-mail"
              required
              class="login__input"
            ></v-text-field>
          </ValidationProvider>
          <ValidationProvider
            v-slot="{ errors }"
            name="Password"
            rules="required|min:5"
          >
            <v-text-field
              v-model="password"
              :error-messages="errors"
              label="Password"
              required
              class="login__input"
            ></v-text-field>
          </ValidationProvider>
          <v-btn
            :color="$store.state.constants.colors.darkerBlue"
            dark
            @click="login"
          >submit</v-btn>
        </form>
      </ValidationObserver>
    </v-container>
  </div>
</template>

<script>
import { required, email, max, min } from 'vee-validate/dist/rules'
import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'

setInteractionMode('eager')

extend('required', {
  ...required,
  message: '{_field_} can not be empty',
})

extend('min', {
  ...min,
  message: '{_field_} must be {length} characters',
})
extend('max', {
  ...max,
  message: '{_field_} may not be greater than {length} characters',
})

extend('email', {
  ...email,
  message: 'Email must be valid',
})

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data: () => ({
    email: '',
    password: '',
  }),

  methods: {

    clear () {
      this.email = ''
      this.password = ''
      this.$refs.observer.reset()
    },
    login () {
      this.$refs.observer.validate()
      this.$store.dispatch('login', { email: this.email, password: this.password })
    }
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles";
.login__input {
  width: 400px;
  @include mobile() {
    width: 295px;
  }
}
</style>