<template>
  <div class="" v-if="user">
    <div class="">
      <gravatar :email="user.email"/>
      <div class="">
        <div class="">
          <p class="profile-username">{{ user.username }}</p>
          <p class="profile-email">{{ user.email }}</p>
        </div>
      </div>
      <div>
        <nuxt-link
          v-if="isEditable"
          class="profile-edit"
          :to="{ name: 'settings-account' }"
        >
          Edit Profile
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import Gravatar from '~/components/Gravatar'

export default {
  name: 'Profile',
  props: {
    user: {
      type: Object,
      required: true
    },
    isEditable: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  components: {
    Gravatar
  }
}
</script>

<style>

</style>
