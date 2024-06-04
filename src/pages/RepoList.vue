<template>
  <div class="profile">
    <h1>Github Repositories</h1>
    <br />
    <input
      class="search-input"
      type="text"
      v-model="searchQuery"
      placeholder="Search repositories..."
    />
    <button class="search-btn" @click="fetchRepos">Search</button>
    <br /><br />
    <div>
      <ResponsiveGrid :repos="repos" />
    </div>

    <br />
    <div class="page-button">
      <button @click="handlePrevPage" :disabled="page === 1">Previous</button>

      <button @click="handleNextPage">Next</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import axios from 'axios'
import ResponsiveGrid from '@/assets/ResponsiveGrid.vue';

interface Params {
  page: number
  per_page: number
  q?: string
}

const repos = ref([])
const page = ref(1)
const searchQuery = ref('')

const fetchRepos = async () => {
  try {
    const token=import.meta.env.VITE_PROJECT_API_TOKEN
    let url = `https://api.github.com/user/139226169/repos`
    const params: Params = { page: page.value, per_page: 2 }
    if (searchQuery.value) {
      url = `https://api.github.com/search/repositories`
      params.q = `${searchQuery.value} in:name user:julie-alt`
    }
    const response = await axios.get(url, {
      params,
      headers: { Authorization: 
        `token ${token}` }
    })
    repos.value = searchQuery.value ? response.data.items : response.data
  } catch (error) {
    console.error('Error fetching repositories:', error)
  }
}

const handlePrevPage = () => {
  if (page.value > 1) {
    page.value--
  }
}

const handleNextPage = () => {
  page.value++
}

onMounted(fetchRepos)
watch([page, searchQuery], fetchRepos)
</script>
