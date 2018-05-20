<template>
  <div class="container mx-auto">
    <div class="">
      <div class="">
        <!-- Markdown -->
        <h1>
          {{ post.title }}
        </h1>
        <p>
          {{ post.body }}
        </p>
        <hr>
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

</style>
