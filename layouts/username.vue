<template>
  <div class="container">
    <navigation />
    <div class="pure-g">
      <div class="pure-u-6-24">
        <profile
          :user="profileUser"
          :is-editable="$auth.user && ($auth.user.username === profileUser.username)"
        />
      </div>
      <div class="pure-u-18-24">
        <top-menu :user="profileUser"/>
        <nuxt/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Navigation from '~/components/Navigation.vue'
import Profile from '~/components/username/Profile.vue'
import TopMenu from '~/components/username/TopMenu.vue'
export default {
  components: {
    Navigation,
    Profile,
    TopMenu
  },
  computed: {
    ...mapGetters(['profileUser']),
    isEditable () {
      try {
        return $auth.user && ($auth.user.username === profileUser.username)
      } catch (error) {
        return false
      }
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/style.scss';

</style>
