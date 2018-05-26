<template>
  <div>
    <div class="comment-avatar">
      <gravatar :email="comment.User.email" />
    </div>
    <div>
      <nuxt-link
        :to="{ name: 'username', params: { username: comment.User.username } }"
      >
        {{ comment.User.username }}
      </nuxt-link>
        - {{ comment.createdAt }}
    </div>
    <div>
      {{ comment.body }}
    </div>
  </div>
</template>

<script>
import Gravatar from '@/components/Gravatar'

export default {
  props: {
    comment: {
      type: Object,
      required: true
    }
  },
  components: {
    Gravatar
  }
}
</script>

<style>
.comment-avatar {
  width: 50px;
}
</style>
