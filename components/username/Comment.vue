<template>
  <div v-if="comment && item">
    <div>
      <nuxt-link
        class="comment-item-title"
        :to="{
          name: 'username-items-id',
          params: {
            username: item.User.username,
            id: item.id
          }
        }"
      >
        {{ item.title }}
      </nuxt-link>
      <div class="comment-created-at">{{ comment.createdAt | formattedDate }}</div>
    </div>
    <div class="comment-body">{{ comment.body }}</div>
  </div>
</template>

<script>
import mixins from '~/mixins'

export default {
  mixins: [ mixins.dateformat ],
  props: {
    comment: {
      type: Object,
      required: true
    },
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>

</style>
