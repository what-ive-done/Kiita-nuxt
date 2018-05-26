<template>
  <div class="container">
    <div class="pure-g">
      <div class="pure-u-1-5">
        <p>Trend</p>
      </div>
      <div class="pure-u-3-5">
        <item v-for="post in posts" :key="post.id" :item="post"/>
      </div>
      <div class="pure-u-1-5"><p>Trending User</p></div>
    </div>

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
