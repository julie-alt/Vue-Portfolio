<template>
  <div class="profile">
    <h1>GitHub Profile</h1>
    <div v-if="profile">
      <img :src="profile.avatar_url" alt="Avatar" />
      <h2>{{ profile.name }}</h2>
      <p>{{ profile.bio }}</p>
      <p>Followers: {{ profile.followers }}</p>
      <p>Following: {{ profile.following }}</p>
      <p>Public Repositories: {{ profile.public_repos }}</p>
      <p>Location: {{ profile.location }}</p>
      <a :href="profile.html_url" target="_blank" rel="noopener noreferrer">View on Github</a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import axios from 'axios'

export default defineComponent({
  name: 'GitHubProfile',
  setup() {
    const profile = ref<any>(null)

    const fetchProfile = async () => {
      try {
        const token = import.meta.env.VITE_PROJECT_API_TOKEN
        const response = await axios.get('https://api.github.com/users/julie-alt', {
          headers: {
            Authorization: `token ${token}`
          }
        })
        profile.value = response.data
      } catch (error) {
        console.error('Error fetching GitHub profile:', error)
      }
    }

    onMounted(() => {
      fetchProfile()
    })

    return {
      profile
    }
  }
})
</script>
