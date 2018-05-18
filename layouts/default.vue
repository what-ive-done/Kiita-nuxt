<template>
  <div>
    <div class="container">
      <navigation />
    </div>
    <nuxt/>
  </div>
</template>

<script>
import Navigation from '~/components/Navigation.vue'

export default {
  components: {
    Navigation
  }
}
</script>

<style lang="scss">
@import '~/assets/style.scss';

</style>
