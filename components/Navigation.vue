<template>
  <div class="pure-menu pure-menu-horizontal navigation">
    <a href="#" class="pure-menu-heading pure-menu-link">Kiita</a>
    <ul class="pure-menu-list">
      <li class="pure-menu-item">
        <nuxt-link class="pure-menu-link" :to="{ name: 'index' }">Home</nuxt-link>
      </li>
      <li class="pure-menu-item">
        <nuxt-link class="pure-menu-link" :to="{ name: 'trend' }">Trend</nuxt-link>
      </li>
      <li class="pure-menu-item">
        <nuxt-link class="pure-menu-link" :to="{ name: 'timeline' }">Timeline</nuxt-link>
      </li>
      <li class="pure-menu-item">
        <nuxt-link class="pure-menu-link" :to="{ name: 'tag-feed' }">TagFeeds</nuxt-link>
      </li>
      <li class="pure-menu-item">
        <nuxt-link class="pure-menu-link" :to="{ name: 'users' }">Users</nuxt-link>
      </li>
      <li class="pure-menu-item">
        <a href="#" class="pure-menu-link" v-if="$auth.loggedIn" @click.prevent="$auth.logout">로그아웃</a>
      </li>
      <li class="pure-menu-item">
        <nuxt-link class="pure-menu-link" v-if="$auth.loggedIn" :to="{ name: 'username', params: { username: $auth.user.username } }">{{ $auth.user.username }}</nuxt-link>
      </li>
      <li class="pure-menu-item">
        <nuxt-link class="pure-menu-link" v-if="!$auth.loggedIn" :to="{ name: 'signin' }">가입 / 로그인</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.navigation {
  height: 40px;
  /* margin-bottom: 40px; */
}
</style>
