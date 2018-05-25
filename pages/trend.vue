<template>
  <div class="container">
    <item v-for="post in posts" :key="post.id" :item="post"/>
  </div>
</template>

<script>
import Item from '~/components/Item.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    Item
  },
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
