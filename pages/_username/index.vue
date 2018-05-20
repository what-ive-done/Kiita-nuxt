<template>
  <div>
    <div class="pure-menu pure-menu-horizontal">
      <ul class="pure-menu-list">
        <li class="pure-menu-item">
          <nuxt-link
            class="pure-menu-link"
            :to="{ name: 'username', params: { username: profileUser.username } }"
          >
            Recent Post
          </nuxt-link>
        </li>
        <li class="pure-menu-item">
          <nuxt-link
            class="pure-menu-link"
            :to="{ name: 'username-comments', params: { username: profileUser.username } }"
          >
            Comments
          </nuxt-link>
        </li>
        <li class="pure-menu-item">
          <nuxt-link
            class="pure-menu-link"
            :to="{ name: 'username-stocked', params: { username: profileUser.username } }"
          >
            Stocked
          </nuxt-link>
        </li>
      </ul>
    </div>
    <div v-for="post in posts" :key="post.id">
      <nuxt-link
        :to="{ name: 'username-items-id', params: { username: profileUser.username, id: post.id }}"
      >{{ post.title }}</nuxt-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'

export default {
  layout: 'username',
  fetch({ store, params }) {
    store.dispatch('getProfileUser', params['username'])
  },
  async asyncData (context) {
    try {
      const { username } = context.route.params
      const { data: posts } = await axios({ method: 'GET', url: `http://localhost:8080/api/users/${username}/items` })
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
