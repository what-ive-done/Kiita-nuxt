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
    <div>
      <div v-for="comment in comments" :key="comment.id">
        <small>{{ comment.Item.title }}</small> <br>
        {{ comment.body }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios'

export default {
  layout: 'username',
  async asyncData (context) {
    try {
      const { username } = context.route.params
      const { data } = await axios({ method: 'GET', url: `http://localhost:8080/api/users/${username}/comments` })
      return { comments: data.Comments }
    } catch (error) {
      console.error(error)
    }
  },
  computed: {
    ...mapGetters(['profileUser'])
  }
}
</script>

<style>

</style>
