<template>
  <div>
    <form @submit.prevent="requestSignIn">
      <div>
        <input type="text" v-model="form.username">
      </div>
      <div>
        <input type="password" v-model="form.password">
      </div>
      <div>
        <input type="submit">
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    requestSignIn () {
      const { username, password } = this.form
      this.$auth.loginWith('local', { data: { username, password } })
    }
  }
}
</script>

<style>

</style>
