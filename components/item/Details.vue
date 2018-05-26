<template>
  <div>
    <h1 class="item-title">{{ item.title }}</h1>
    <p class="item-details">{{ item.body }}</p>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>

</style>
