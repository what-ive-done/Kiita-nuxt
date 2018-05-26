<template>
  <div class="container mx-auto">
    <div class="pure-u-3-5 content">
      <item-details :item="item" />
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
        <li v-for="comment in item.Comments" :key="comment.id">
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
import ItemDetails from '@/components/item/Details'

export default {
  components: {
    ItemDetails
  },
  async asyncData (context) {
    try {
      const { username, id } = context.route.params
      console.log('id => ', id)
      const { data: item } = await axios({ method: 'GET', url: `http://localhost:8080/api/users/${username}/items/${id}` })
      return { item }
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
