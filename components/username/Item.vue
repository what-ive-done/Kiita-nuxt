<template>
  <div v-if="item">

  </div>
</template>

<script>
import { distanceInWords } from 'date-fns'
import koLocale from 'date-fns/locale/ko'

export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    // TODO: Filter 믹스인으로 만들 것
    daysAgo () {
      const days = distanceInWords(this.item.createdAt, new Date(), {
        locale: koLocale
      })
      return `${days} 전`
    },
    stripedTitle () {
      return this.item.title.slice(0, 20)
    }
  }
}
</script>

<style>

</style>
