<template>
  <div v-if="item">
    <nuxt-link
      class="item-gravatar-link"
      :to="{ name: 'username', params: { username: item.User.username } }"
    >
      <gravatar :email="item.User.email"/>
    </nuxt-link>
    <nuxt-link
      class="item-title-link"
      :to="{
        name: 'username-items-id',
        params: {
          username: item.User.username,
          id: item.id
        }
      }"
    >
      <div class="item-title">{{ item.title | stripedTitle }}</div>
    </nuxt-link>
    <div class="item-created">{{ item.createdAt | daysAgo }}</div>
    <div class="item-username">{{ item.User.username }}</div>
  </div>
</template>

<script>
import Mixins from '~/mixins'
import Gravatar from '~/components/Gravatar.vue'

export default {
  mixins: [Mixins.listItem],
  props: {
    item: {
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

</style>
