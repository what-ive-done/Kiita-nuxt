<template>
  <div class="pure-menu pure-menu-horizontal">
    <ul class="pure-menu-list">
      <li class="pure-menu-item">
        <nuxt-link
          class="pure-menu-link"
          :to="{ name: 'username', params: { username: user.username } }"
        >
        Items
        </nuxt-link>
      </li>
      <li class="pure-menu-item">
        <nuxt-link
          class="pure-menu-link"
          :to="{ name: 'username-contributes', params: { username: user.username } }"
        >
        Contributes
        </nuxt-link>
      </li>
      <li class="pure-menu-item">
        <nuxt-link
          class="pure-menu-link"
          :to="{ name: 'username-followers', params: { username: user.username } }"
        >
          Followers
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>

</style>
