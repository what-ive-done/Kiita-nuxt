<template>
  <div>
    <nuxt-link
      :to="{ name: 'username', params: { username: comment.User.username } }"
    >
      {{ comment.User.username }}
    </nuxt-link>
      - {{ comment.body }}
  </div>
</template>

<script>
export default {
  props: {
    comment: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>

</style>
