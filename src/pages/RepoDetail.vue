<template>
  <div class="repo-box">
    <div v-if="error">Error: {{ error }}</div>
    <div v-else-if="!repo">Loading...</div>
    <div v-else>
      <h1>{{ repo.name }}</h1>
      <p class="repo-info">{{ repo.description }}</p>
      <p class="repo-info">Stars: {{ repo.stargazers_count }}</p>
      <p class="repo-info">Language: {{ repo.language === null ? 'none' : repo.language }}</p>
      <p class="repo-info">Visibility: {{ repo.visibility }}</p>
      <p class="repo-info">Forks: {{ repo.forks }}</p>
      <a :href="repo.html_url" target="_blank" rel="noopener noreferrer"> View on Github </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

export default defineComponent({
  name: 'RepoDetail',
  setup() {
    const route = useRoute()
    const repoId = route.params.repoId as string
    const repo = ref<any>(null)
    const error = ref<string | null>(null)

    const fetchRepo = async () => {
      try {
        const token=import.meta.env.VITE_PROJECT_API_TOKEN
        const response = await axios.get(`https://api.github.com/repos/julie-alt/${repoId}`, {
          headers: {
            Authorization: `token ${token}`
          }
        })
        repo.value = response.data
      } catch (err) {
        console.error('Error fetching repository:', err)
        error.value = 'An error occurred while fetching repository details.'
      }
    }

    onMounted(() => {
      fetchRepo()
    })

    return {
      repo,
      error
    }
  }
})
</script>
