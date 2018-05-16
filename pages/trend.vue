<template>
  <div class="container">
    {{ posts }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  fetch({ store }) {
    store.dispatch('getPosts')
  },
  computed: {
    ...mapGetters(['posts'])
  }
}
</script>

<style>

</style>
