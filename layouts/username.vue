<template>
  <div class="container">
    <navigation />
    <div class="pure-g">
      <div class="pure-u-6-24">
        <profile />
      </div>
      <div class="pure-u-18-24">
        <top-menu />
        <nuxt/>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from '~/components/Navigation.vue'
import Profile from '~/components/username/Profile.vue'
import TopMenu from '~/components/username/TopMenu.vue'

export default {
  components: {
    Navigation,
    Profile,
    TopMenu
  },

}
</script>

<style lang="scss">
@import '~/assets/style.scss';

</style>
