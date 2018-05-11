<template>
  <div>
    <ul>
      <li>
        <nuxt-link
          :to="{ name: 'username', params: { username: 'changjoo-park' } }"
        >
          Recent Post
        </nuxt-link>
      </li>
      <li>
        <nuxt-link
          :to="{ name: 'username-comments', params: { username: 'changjoo-park' } }"
        >
          Comments
        </nuxt-link>
      </li>
      <li>
        <nuxt-link
          :to="{ name: 'username-stocked', params: { username: 'changjoo-park' } }"
        >
          Stocked
        </nuxt-link>
      </li>
    </ul>
    Recent Post
  </div>
</template>

<script>
import axios from 'axios'

export default {
  layout: 'username'
}
</script>

<style>

</style>
