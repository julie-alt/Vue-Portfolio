<template>
  <div class="main-container mainContainer">
    <div class="grid-container">
      <div class="grid-item">
        <RepoList />
      </div>
      <div class="grid-item">
        <GitHubProfile />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import RepoList from '../pages/RepoList.vue'
import GitHubProfile from '../components/MyProfile.vue'

export default defineComponent({
  name: 'MainContainer',
  components: {
    RepoList,
    GitHubProfile
  }
})
</script>
