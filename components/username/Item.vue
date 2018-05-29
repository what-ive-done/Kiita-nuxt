<template>
  <div v-if="item" class="list-item">
    <div class="item-description">
      <nuxt-link
        class="item-title-link"
        :to="{ name: 'username-items-id', params: { id: item.id }}"
      >
        <h3 class="item-title">{{ item.title }}</h3>
      </nuxt-link>
    </div>
    <div class="item-meta">
      <span class="item-created">{{ item.createdAt | daysAgo }}</span>
    </div>
  </div>
</template>

<script>
import Mixins from '~/mixins'

export default {
  mixins: [Mixins.listItem],
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
.list-item {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 20px;

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
}
</style>
