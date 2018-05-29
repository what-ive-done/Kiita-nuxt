<template>
  <div>
    <sub-menu />
    <div>
      <item v-for="post in posts" :key="post.id" :item="post"/>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
import Item from '~/components/username/Item.vue'
import SubMenu from '~/components/username/SubMenu.vue'

export default {
  layout: 'username',
  components: {
    Item,
    SubMenu
  },
  fetch({ store, params }) {
    store.dispatch('getProfileUser', params['username'])
  },
  async asyncData (context) {
    try {
      const { username } = context.route.params
      const { data: posts } = await axios({ method: 'GET', url: `http://127.0.0.1:8080/api/users/${username}/items` })
      return { posts }
    } catch (error) {
      console.error(error)
    }
  },
  data () {
    return {
      posts: []
    }
  },
  computed: {
    ...mapGetters(['profileUser'])
  }
}
</script>

<style>

</style>
