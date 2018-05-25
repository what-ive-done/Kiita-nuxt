<template>
  <div v-if="item">

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

<style>

</style>
