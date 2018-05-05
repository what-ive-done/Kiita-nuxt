<template>
  <div>
    <ul>
      <li>
        <nuxt-link
          :to="{ name: 'username', params: { username: 'changjoo-park' } }"
        >
        Recent Posts
        </nuxt-link>
      </li>
      <li>
        <nuxt-link
          :to="{ name: 'username-comments', params: { username: 'changjoo-park' } }"
        >
        Comments
        </nuxt-link>
      </li>
    </ul>
    <h1>Comments</h1>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
