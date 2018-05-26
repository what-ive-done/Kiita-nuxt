<template>
  <span class="tag">{{ tag.name }}</span>
</template>

<script>
export default {
  props: {
    tag: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
.tag {
  background-color: grey;
  color: white;
  margin-right: 10px;
}
</style>
