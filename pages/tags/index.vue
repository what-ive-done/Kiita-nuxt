<template>
  <div class="container">
    <h1>Hello</h1>
    <span v-for="tag in tags" :key="tag.id">
      {{ tag.name }} - {{ getItemsCount(tag.Items )}}
    </span>
  </div>
</template>

<script>
export default {
  async asyncData ({ app }) {
    try {
      const data = await app.$axios.$get('http://localhost:8080/api/tags')
      return { tags: data }
    } catch (error) {
      console.log(error)
    }
  },
  methods: {
    getItemsCount (items) {
      return items.length || 0
    }
  }
}
</script>

<style>

</style>
