<template>
  <div>
    <v-container
      class="d-flex justify-center align-center"
      style="height: 100vh"
    >
      <ValidationObserver ref="observer">
        <h1 class="text-center">Admin Portal</h1>
        <span
          class="v-messages theme--light error--text"
          v-if="error"
        >{{ error }}</span>
        <form @submit.prevent="login">
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
              type="password"
            ></v-text-field>
          </ValidationProvider>
          <v-btn
            :color="$store.state.constants.colors.darkerBlue"
            dark
            type="submit"
            min-width="92px"
            :style="loading ? 'pointer-events: none; opacity: 0.2' : ''"
          >
            <template v-if="!loading">submit</template>
            <template v-else>
              <v-progress-circular
                indeterminate
                color="white"
                :size="25"
              ></v-progress-circular>
            </template>
          </v-btn>
        </form>
      </ValidationObserver>
    </v-container>
  </div>
</template>

<script>
import { required, email, max, min } from 'vee-validate/dist/rules'
import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'
import { login } from '@/graphql/Mutations'

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
    error: null,
    loading: false
  }),

  methods: {
    clear () {
      this.email = ''
      this.password = ''
      this.$refs.observer.reset()
    },
    async login () {
      this.error = null
      const isValid = await this.$refs.observer.validate()
      if (!isValid) return
      this.loading = true
      await this.$apollo.mutate({
        mutation: login,
        variables: {
          email: this.email,
          password: this.password,
        },
      })
        .then((res) => {
          this.loading = false
          this.$store.commit('isAuthenticated', true)
          localStorage.setItem('token', res.data.login.token)
          const user = {
            user: res.data.login.user,
            token: res.data.login.token
          }
          this.$store.commit('setUser', user)
          this.$router.push('projects')
        })
        .catch((err) => {
          this.loading = false
          this.error = err.message.split(':')[1]
        })
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