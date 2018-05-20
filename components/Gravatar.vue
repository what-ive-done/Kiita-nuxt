<template>
  <img :src="gravatar" :alt="email" class="user-avatar">
</template>

<script>
import gravatar from 'gravatar'

export default {
  name: 'gravatar',
  props: {
    email: {
      type: String,
      required: true
    }
  },
  computed: {
    gravatar () {
      return gravatar.url(this.email, { s: '300', d: 'retro', r: 'pg' })
    }
  }
}
</script>

<style>

</style>
