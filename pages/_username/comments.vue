<template>
  <div>
    <sub-menu />
    <div>
      <comment
        v-for="comment in comments"
        :key="comment.id"
        :comment="comment"
        :item="comment.Item"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios'
import Comment from '~/components/username/Comment.vue'
import SubMenu from '~/components/username/SubMenu.vue'

export default {
  layout: 'username',
  async asyncData (context) {
    try {
      const { username } = context.route.params
      const { data } = await axios({ method: 'GET', url: `http://127.0.0.1:8080/api/users/${username}/comments` })
      return { comments: data.Comments }
    } catch (error) {
      console.error(error)
    }
  },
  computed: {
    ...mapGetters(['profileUser'])
  },
  components: {
    Comment,
    SubMenu
  }
}
</script>

<style>

</style>
