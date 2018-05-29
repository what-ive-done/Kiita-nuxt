<template>
  <div>
    <sub-menu />
    Stocked
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SubMenu from '~/components/username/SubMenu.vue'

export default {
  layout: 'username',
  components: {
    SubMenu
  },
  fetch({ store, params }) {
    store.dispatch('getProfileUser', params['username'])
  },
  computed: {
    ...mapGetters(['profileUser'])
  }
}
</script>

<style>

</style>
