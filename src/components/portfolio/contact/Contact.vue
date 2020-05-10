<template>
  <div id="contact">
    <h1
      data-aos="fade-in"
      class="display-1 text-uppercase text-center mb-0"
    >Contact</h1>
    <Underline
      data-aos="fade-in"
      color="white"
    />
    <ValidationObserver ref="observer">

      <form
        data-aos="zoom-in"
        @submit.prevent="sendMessage()"
        class="d-flex flex-column align-center"
      >
        <div class="contact__input">
          <ValidationProvider
            v-slot="{ errors }"
            name="Name"
            rules="required"
          >
            <input
              type="text"
              name="Name"
              id="name"
              placeholder="Name"
              v-model="name"
            >
            <span
              class="v-messages theme--light error--text"
              v-if="errors"
            >{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
        <div class="contact__input">
          <ValidationProvider
            v-slot="{ errors }"
            name="Email"
            rules="required|email"
          >
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              v-model="email"
            >
            <span
              class="v-messages theme--light error--text"
              v-if="errors"
            >{{ errors[0] }}</span>

          </ValidationProvider>
        </div>
        <div class="contact__input">
          <ValidationProvider
            v-slot="{ errors }"
            name="Message"
            rules="required"
          >
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="7"
              placeholder="Message"
              v-model="message"
            ></textarea>
            <span
              class="v-messages theme--light error--text"
              v-if="errors"
            >{{ errors[0] }}</span>

          </ValidationProvider>
        </div>
        <v-btn
          @click="sendMessage()"
          type="submit"
          class="mt-3"
          dark
          outlined
        >
          Submit
        </v-btn>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import { required, email } from 'vee-validate/dist/rules'
import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'
setInteractionMode('eager')

extend('email', {
  ...email,
  message: 'Invalid email address',
})
extend('required', {
  ...required,
  message: '{_field_} can not be empty',
})
export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data () {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    async sendMessage () {
      const isValid = await this.$refs.observer.validate()
      if (!isValid) return
      window.location.href = `mailto:traynorthern@yahoo.com?subject=Let's talk&body=${this.message}`;

    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles";
#contact {
  background-color: $blackish;
  color: white;
  padding-top: 75px;
  padding-bottom: 55px;
}
.contact__input {
  @include mobile() {
    width: 90%;
  }
  width: 400px;
  input,
  textarea {
    background: $darkerBlue;
    border: 0;
    box-sizing: border-box;
    color: #fff;
    display: block;
    font-size: 19px;
    margin-bottom: 3px;
    outline: none;
    padding: 10px 15px;
    width: 100%;
    &::placeholder {
      color: #fff;
    }
  }
  textarea {
    resize: none;
  }
}
</style>