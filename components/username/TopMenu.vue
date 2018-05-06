<template>
  <ul>
    <li>
      <nuxt-link
        :to="{ name: 'username', params: { username: 'changjoo-park' } }"
      >
      Items
      </nuxt-link>
    </li>
    <li>
      <nuxt-link
        :to="{ name: 'username-contributes', params: { username: 'changjoo-park' } }"
      >
      Contributes
      </nuxt-link>
    </li>
    <li>
      <nuxt-link
        :to="{ name: 'username-followers', params: { username: 'changjoo-park' } }"
      >
        Followers
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {

}
</script>

<style>

</style>
