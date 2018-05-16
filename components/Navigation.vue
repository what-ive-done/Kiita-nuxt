<template>
  <nav>
    <nuxt-link
      :to="{ name: 'index' }"
    >
      Home
    </nuxt-link>
    <nuxt-link
      :to="{ name: 'trend' }"
    >
      Trend
    </nuxt-link>
    <nuxt-link
      :to="{ name: 'timeline' }"
    >
      Timeline
    </nuxt-link>
    <nuxt-link
      :to="{ name: 'tag-feed' }"
    >
      TagFeeds
    </nuxt-link>
    <nuxt-link
      :to="{ name: 'users' }"
    >
      Users
    </nuxt-link>
    <a href="#" @click.prevent="$auth.logout"
      v-if="$auth.loggedIn"
    >
      로그아웃
    </a>
    <nuxt-link
      v-if="$auth.loggedIn"
      :to="{ name: 'username', params: { username: $auth.user.username } }"
    >
      {{ $auth.user.username }}
    </nuxt-link>
    <nuxt-link
      v-else
      :to="{ name: 'signin' }"
    >
      가입 / 로그인
    </nuxt-link>
  </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>
