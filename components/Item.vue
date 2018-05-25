<template>
  <div v-if="item" class="list-item">
    <nuxt-link
      class="item-gravatar-link"
      :to="{ name: 'username', params: { username: item.User.username } }"
    >
      <gravatar :email="item.User.email"/>
    </nuxt-link>
    <div class="item-description">
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
        <h3 class="item-title">{{ item.title | stripedTitle }}</h3>
      </nuxt-link>
      <div class="item-meta">
        <span class="item-username">{{ item.User.username }}</span>
        <span class="item-created">{{ item.createdAt | daysAgo }}</span>
      </div>
    </div>
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

<style lang="scss">
.list-item {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  .item-gravatar-link {
    flex: 0;
    box-sizing: border-box;
    min-width: 64px;
    margin-right: 1rem;
  }

  .item-description {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .item-title-link {
    color: #777;
    text-decoration: none;
  }

  .item-title {
    font-size: 1.6rem;
    font-weight: 700;
    color: inherit;
    margin: 0;
  }

  .item-username {
    margin-right: 1rem;
  }
}

</style>
