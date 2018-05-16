<template>
  <div class="bg-white mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden">
    <div class="sm:flex sm:flex-col sm:items-center px-6 py-4">
      <img
        class="block h-16 sm:h-24 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0"
        src="https://qiita-image-store.s3.amazonaws.com/0/156279/profile-images/1525094577"
        alt="changjoo-park"
      >
      <div class="text-center sm:text-left sm:flex-grow">
        <div class="mb-4">
          <p class="text-xl leading-tight">{{ profileUser.username }}</p>
          <p class="text-sm leading-tight text-grey-dark">{{ profileUser.email }}</p>
        </div>
      </div>
      <div>
        <nuxt-link
          class="text-xs font-semibold rounded-full px-4 py-1 leading-normal bg-white border border-purple text-purple no-underline hover:bg-purple hover:text-white"
          :to="{ name: 'settings-account' }"
        >
          Edit Profile
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['profileUser'])
  }
}
</script>

<style>

</style>
