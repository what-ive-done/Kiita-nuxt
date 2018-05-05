<template>
  <div>
  </div>
</template>

<script>
export default {
  asyncData ({ params }) {
    const { username } = params
    return params
  },
  created () {
    this.$router.replace({
      name: 'username',
      params: {
        username: this.username
      }
    })
  }
}

</script>

<style>

</style>
