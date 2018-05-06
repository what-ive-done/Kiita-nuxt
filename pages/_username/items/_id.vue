<template>
  <div class="container mx-auto">
    <div class="flex mb-4 bg-grey-lighter">
      <div class="w-4/5 text-grey-darker bg-grey-light px-4 py-2 m-2">
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
          <li v-for="comment in post.comments" :key="comment.id">
            {{ comment.body }}
          </li>
        </ul>
        <form action="">
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </form>
      </div>
      <div class="w-1/5 text-grey-darker bg-grey-light px-4 py-2 m-2">
        <ul class="sticky pin-y pin-r">
          <li>Title 1</li>
          <li>Title 2</li>
          <li>Title 3</li>
          <li>Title 4</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData ({ params }) {
    console.log('params => ', params.id)
    const { data } = await axios.get(`http://localhost:8080/api/items/${params.id}`)
    return {
      post: data
    }
  }
}
</script>

<style>

</style>
