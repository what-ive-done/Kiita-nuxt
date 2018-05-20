<template>
  <div class="container mx-auto">
    <div class="pure-g">

    </div>
    <div class="pure-u-3-5 content">
        <!-- Markdown -->
        <h1>
          {{ post.title }}
        </h1>
        <p>
          {{ post.body }}
        </p>
        <hr>
    </div>
    <div class="pure-u-2-5 table-of-content">
      <div>
        <img src="http://lorempicsum.com/futurama/350/200/1" alt="ad-1" width="100%">
      </div>
      <ul>
        <li>Table Of Content</li>
      </ul>
    </div>

    <div class="pure-u-1">
      <!-- Comments -->
      <ul>
        <li v-for="comment in post.Comments" :key="comment.id">
          <nuxt-link
            :to="{ name: 'username', params: { username: comment.User.username } }"
          >
            {{ comment.User.username }}
          </nuxt-link>
            - {{ comment.body }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData (context) {
    try {
      const { username, id } = context.route.params
      console.log('id => ', id)
      const { data: post } = await axios({ method: 'GET', url: `http://localhost:8080/api/users/${username}/items/${id}` })
      return { post }
    } catch (error) {
      console.error(error)
    }
  }
}
</script>

<style>
.content {
  box-sizing: border-box;
  padding: 1em;
}

.table-of-content {
  box-sizing: border-box;
  padding: 1em;
}
</style>
