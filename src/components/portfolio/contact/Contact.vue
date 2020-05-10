<template>
  <div id="contact">
    <h1 data-aos="fade-in" class="display-1 text-uppercase text-center mb-0">Contact</h1>
    <Underline data-aos="fade-in" color="white" />
    <form
    data-aos="zoom-in"
      @submit.prevent="sendMessage"
      class="d-flex flex-column align-center"
    >
      <div class="contact__input">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          v-model="name"
        >
      </div>
      <div class="contact__input">
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Email"
          v-model="email"
        >
      </div>
      <div class="contact__input">
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="7"
          placeholder="Message"
          v-model="message"
        ></textarea>
      </div>
      <v-btn class="mt-3" dark outlined>
          Submit
      </v-btn>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    sendMessage () {
      console.log(this.message)
      window.location.href = "mailto:address@dmail.com";

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