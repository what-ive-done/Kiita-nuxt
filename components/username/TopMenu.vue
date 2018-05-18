<template>
  <div class="pure-menu pure-menu-horizontal">
    <ul class="pure-menu-list">
      <li class="pure-menu-item">
        <nuxt-link
          class="pure-menu-link"
          :to="{ name: 'username', params: { username: 'changjoo-park' } }"
        >
        Items
        </nuxt-link>
      </li>
      <li class="pure-menu-item">
        <nuxt-link
          class="pure-menu-link"
          :to="{ name: 'username-contributes', params: { username: 'changjoo-park' } }"
        >
        Contributes
        </nuxt-link>
      </li>
      <li class="pure-menu-item">
        <nuxt-link
          class="pure-menu-link"
          :to="{ name: 'username-followers', params: { username: 'changjoo-park' } }"
        >
          Followers
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
