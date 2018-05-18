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
    Stocked
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  layout: 'username',
  fetch({ store, params }) {
    store.dispatch('getProfileUser', params['username'])
  },
  computed: {
    ...mapGetters(['profileUser'])
  }
}
</script>

<style>

</style>
