<template>
  <div>
    <h1 class="item-title">{{ item.title }}</h1>
    <tag
      v-for="tag in item.Tags"
      :key="tag.id"
      :tag="tag"
    />
    <p class="item-details">{{ item.body }}</p>
  </div>
</template>

<script>
import Tag from '@/components/Tag'

export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  components: {
    Tag
  }
}
</script>

<style>

</style>
