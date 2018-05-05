<template>
  <div class="container mx-auto">
    <div class="flex mb-4 bg-grey-lighter">
      <div class="w-1/4 md:w-1/4 sm:w-full text-grey-darker text-center bg-grey-light px-4 py-2 m-2">
        <img src="https://qiita-image-store.s3.amazonaws.com/0/156279/profile-images/1525094577" alt="changjoo-park">
        <h3>ChangJoo Park</h3>
        <h4>@<span>changjoo-park</span></h4>
        <hr>
        <div>
          pcjpcj2@gmail.com
        </div>
        <div>
          Seoul, Korea
        </div>
        <div>
          <nuxt-link
            :to="{ name: 'settings-account' }"
          >
            Edit Profile
          </nuxt-link>
        </div>
      </div>
      <div class="w-3/4 md:w-3/4 sm:w-full text-grey-darker bg-grey-light px-4 py-2 m-2">
        <ul>
          <li>
            <nuxt-link
              :to="{ name: 'username', params: { username: 'changjoo-park' } }"
            >
            Items
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              :to="{ name: 'username-contributes', params: { username: 'changjoo-park' } }"
            >
            Contributes
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              :to="{ name: 'username-followers', params: { username: 'changjoo-park' } }"
            >
              Followers
            </nuxt-link>
          </li>
        </ul>
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
