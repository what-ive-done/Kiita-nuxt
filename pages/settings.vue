<template>
  <div class="container mx-auto">
    <div class="flex mb-4 bg-grey-lighter">
      <div class="w-1/4 md:w-1/4 sm:w-full text-grey-darker text-center bg-grey-light px-4 py-2 m-2">
        <h1>여기에 설정 메뉴 목록 출력</h1>
      </div>
      <div class="w-3/4 md:w-3/4 sm:w-full text-grey-darker bg-grey-light px-4 py-2 m-2">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
