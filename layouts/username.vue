<template>
  <div>
    <navigation />
    <div class="container mx-auto">
      <div class="flex mb-4 bg-grey-lighter">
        <div class="w-1/4 md:w-1/4 sm:w-full text-grey-darker text-center bg-grey-light px-4 py-2 m-2">
          <profile />
        </div>
        <div class="w-3/4 md:w-3/4 sm:w-full text-grey-darker bg-grey-light px-4 py-2 m-2">
          <top-menu />
          <nuxt/>
        </div>
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
